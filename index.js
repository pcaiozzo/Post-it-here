const fs = require("fs");
const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const notes = require("./db/db.json");
const { appendFile, readingFile, writingFile } = require("./utils");//CHANGE

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  readingFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    appendFile(newNote, "./db/db.json");
    res.json(`Note added!`);
  } else {
    res.error("Error with adding note");
  }
});

app.delete("/api/notes/:id", (req, res) => {
  const notesID = req.params.id;
  readingFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id !== notesID);

      writingFile("./db/db.json", result);

      res.json(`Item ${notesID} has been deleted`);
    });
});

app.get("/api/notes", (req, res) => {
  res.json(`${req.method} request received`);
  console.info(req.rawHeaders);
  console.info(`${req.method} request received`);
});

app.post("/api/notes", (req, res) => {
  res.json(`${req.method} request received`);
  console.info(req.rawHeaders);
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
