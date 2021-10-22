const express = require("express");
const RecordController = require("./Controller/RecordController");
const UserController = require("./Controller/UserController");

const routes = express.Router();

routes.get("/records", RecordController.getAllRecords);
routes.get("/records/fields", RecordController.getFields);
routes.get("/records/:id", RecordController.getRecordByID);
routes.post("/records", RecordController.createRecord);
routes.get("/records/page/:page", RecordController.getRecordsByPage);
routes.post("/records/:id/forward", RecordController.forwardRecord);
routes.get("/records/:id/sections", RecordController.getRecordSectionsByID);
routes.post("/records/:id/status", RecordController.setRecordSituation);
routes.get("/records/:id/history", RecordController.getRecordsHistory);
routes.get("/records/:id/current-section", RecordController.findCurrentSection);
routes.post("/users", UserController.createUser);
routes.get("/count/records", RecordController.getTotalNumberOfRecords);

module.exports = routes;
