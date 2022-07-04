const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// app.get("/api/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });


function createNewNote(body, nowNotes) {
  const newNote = body;
  if (!Array.isArray(nowNotes)) nowNotes = [];

  if (nowNotes.length === 0) nowNotes.push(0);

  body.id = nowNotes[0];
  nowNotes[0]++;

  nowNotes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(nowNotes, null, 2)
  );
  return newNote;
}

// app.post("/api/notes", (req, res) => {
//   const newNote = createNewNote(req.body, "./db/db.json");
//   res.json(newNote);
// });



app.listen(PORT, () => {
    console.log(`API server now on http://localhost:${PORT}`)
});