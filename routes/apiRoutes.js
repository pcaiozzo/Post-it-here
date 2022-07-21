const fs = require("fs");
const apiDirect = require("express").Router();
const notesInfo = require("../db/db.json");
const { v4: uuid } = require("uuid");

apiDirect.get("/api/notes", (req, res) => res.json(notesInfo));

apiDirect.post("/api/notes", (req, res) => {
  req.body.id = uuid();

  notesInfo.push(req.body);

  fs.writeFile("./db/db.json", JSON.stringify(notesInfo), (err) => {
    if (err) {
      console.info(err);
    }
  });
  res.json(notesInfo);
});

apiDirect.delete("/api/notes/:id", (req, res) => {
  const deleteID = req.params.id;
  for (let i = 0; i < notesInfo.length; i++) {
    if (notesInfo[i].id == deleteID) {
      notesInfo.splice(i, 1);
    }
  }
  fs.writeFile("./db/db.json", JSON.stringify(notesInfo), (err) => {
    if (err) {
      console.info(err);
    }
  });
  newnotesInfo = notesInfo;
  res.json(newnotesInfo);
});

module.exports = apiDirect;
