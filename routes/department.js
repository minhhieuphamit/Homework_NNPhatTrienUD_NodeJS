var express = require("express");
var router = express.Router();
var responseData = require("../helper/responseData");
var modelProduct = require("../models/department");
const { validationResult } = require("express-validator");

router.get("/", async function (req, res, next) {
  var result = await modelProduct.getAll();
  responseData.responseReturn(res, 200, true, result);
});

router.get("/:id", async function (req, res, next) {
  var result = await modelProduct.getById(req.params.id);
  responseData.responseReturn(res, 200, true, result);
});

router.post("/", async function (req, res, next) {
  var result = await modelProduct.createDepartment(req.body);
  responseData.responseReturn(res, 200, true, result);
});

router.put("/:id", async function (req, res, next) {
  var result = await modelProduct.updateDepartment(req.params.id, req.body);
  responseData.responseReturn(res, 200, true, result);
});

router.delete("/:id", async function (req, res, next) {
  var result = await modelProduct.deleteDepartment(req.params.id);
  responseData.responseReturn(res, 200, true, result);
});

module.exports = router;
