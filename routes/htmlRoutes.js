const path = require("path");
const htmlDirect = require("express").Router();

htmlDirect.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

htmlDirect.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

htmlDirect.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = htmlDirect;
