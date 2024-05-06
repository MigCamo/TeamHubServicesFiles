var DataTypes = require("sequelize").DataTypes;
var _document = require("./document");
var _extension = require("./extension");
var _project = require("./project");
var _projectdocument = require("./projectdocument");
var _projectstudent = require("./projectstudent");
var _projecttask = require("./projecttask");
var _student = require("./student");
var _tasks = require("./tasks");
var _taskstudent = require("./taskstudent");

function initModels(sequelize) {
  var document = _document(sequelize, DataTypes);
  var extension = _extension(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var projectdocument = _projectdocument(sequelize, DataTypes);
  var projectstudent = _projectstudent(sequelize, DataTypes);
  var projecttask = _projecttask(sequelize, DataTypes);
  var student = _student(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var taskstudent = _taskstudent(sequelize, DataTypes);

  projectdocument.belongsTo(document, { as: "IdDocument_document", foreignKey: "IdDocument"});
  document.hasMany(projectdocument, { as: "projectdocuments", foreignKey: "IdDocument"});
  projectdocument.belongsTo(project, { as: "IdProject_project", foreignKey: "IdProject"});
  project.hasMany(projectdocument, { as: "projectdocuments", foreignKey: "IdProject"});
  projectstudent.belongsTo(project, { as: "IdProject_project", foreignKey: "IdProject"});
  project.hasMany(projectstudent, { as: "projectstudents", foreignKey: "IdProject"});
  projecttask.belongsTo(project, { as: "IdProject_project", foreignKey: "IdProject"});
  project.hasMany(projecttask, { as: "projecttasks", foreignKey: "IdProject"});
  projectstudent.belongsTo(student, { as: "IdStudent_student", foreignKey: "IdStudent"});
  student.hasMany(projectstudent, { as: "projectstudents", foreignKey: "IdStudent"});
  taskstudent.belongsTo(student, { as: "IdStudent_student", foreignKey: "IdStudent"});
  student.hasMany(taskstudent, { as: "taskstudents", foreignKey: "IdStudent"});
  projecttask.belongsTo(tasks, { as: "IdTask_task", foreignKey: "IdTask"});
  tasks.hasMany(projecttask, { as: "projecttasks", foreignKey: "IdTask"});
  taskstudent.belongsTo(tasks, { as: "IdTask_task", foreignKey: "IdTask"});
  tasks.hasMany(taskstudent, { as: "taskstudents", foreignKey: "IdTask"});

  return {
    document,
    extension,
    project,
    projectdocument,
    projectstudent,
    projecttask,
    student,
    tasks,
    taskstudent,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
