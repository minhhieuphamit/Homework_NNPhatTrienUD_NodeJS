var SchemaDepartment = require("../schema/department");

module.exports = {
  getAll: function (query) {
    var sort = {};
    var Search = {};
    if (query.sort) {
      if (query.sort[0] == "-") {
        sort[query.sort.substring(1)] = "desc";
      } else {
        sort[query.sort] = "asc";
      }
    }
    if (query.key) {
      Search.name = new RegExp(query.key, "i");
    }
    var limit = parseInt(query.limit) || 2;
    var page = parseInt(query.page) || 1;
    var skip = (page - 1) * limit;
    return SchemaDepartment.find(Search)
      .select("name")
      .sort(sort)
      .limit(limit)
      .skip(skip)
      .exec();
  },
  getOne: function (id) {
    return SchemaDepartment.findById(id);
  },
  getByName: function (name) {
    return SchemaDepartment.findOne({ name: name }).exec();
  },
  createDepartment: function (department) {
    return new SchemaDepartment(department).save();
  },
  editDepartment: function (id, newdepartment) {
    return SchemaDepartment.findByIdAndUpdate(id, newdepartment, {
      returnDocument: "after",
    });
  },
  deleteDepartment: function (id) {
    return SchemaDepartment.findByIdAndDelete(id, { returnDocument: "after" });
  },
};
