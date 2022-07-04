const fs = require("fs");
const path = require("path");
const express = require("express");

// function varifyNote(note) {
//   let filteredResults = zookeepers;
//   if (query.age) {
//     filteredResults = filteredResults.filter(
//       // Since our form data will be coming in as strings, and our JSON is storing
//       // age as a number, we must convert the query string to a number to
//       // perform a comparison:
//       (zookeeper) => zookeeper.age === Number(query.age)
//     );
//   }
//   if (query.favoriteAnimal) {
//     filteredResults = filteredResults.filter(
//       (zookeeper) => zookeeper.favoriteAnimal === query.favoriteAnimal
//     );
//   }
//   if (query.name) {
//     filteredResults = filteredResults.filter(
//       (zookeeper) => zookeeper.name === query.name
//     );
//   }
//   return filteredResults;
// }
