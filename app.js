const inquirer = require("inquirer");
const cTable = require("console.table");
var express = require("express");
var router = express.Router();
const db = require("./db/connection");

//instance of express named app
const app = express();

const addDepartmentQ = {
  type: "input",
  name: "department",
  message: "What is the department name?",
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log("Please enter department name");
      return false;
    }
  },
};

const addRoleQ = [
  {
    type: "input",
    name: "role",
    message: "What is the role name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter role name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary amount?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter salary amount");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the department id?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter department id");
        return false;
      }
    },
  },
];

const addEmployeeQ = [
  {
    type: "input",
    name: "first",
    message: "What is the employee first name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter employee first name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "last",
    message: "What is the employee last name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter employee last name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "roleid",
    message: "What is the role id?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter role id");
        return false;
      }
    },
  },
];

// const updateEmployeeQuestion = {
//   type: "list",
//   name: "employee",
//   message: "Select employee to update",
//   choices: [],
// };

const updateEmployeeQ = [
  {
    type: "input",
    name: "id",
    message: "What is the employee id to update?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter employee id");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "newid",
    message: "What is the employee new role id?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter employee new role id");
        return false;
      }
    },
  },
];

const start = questions => {
  return inquirer.prompt(questions);
};

const startLoop = questions => {
  inquirer.prompt(questions).then(res => {
    //View All Departments
    if (res.choices === "View all departments") {
      //query the db and return it to the console table
      const sql = `SELECT * FROM department`;

      db.query(sql, function (err, results, fields) {
        console.table(results);
        startLoop(choices);
      });

      //View All Roles
    } else if (res.choices === "View all roles") {
      //query the db and return it to the console table
      const sql = `SELECT * FROM employee_role`;

      db.query(sql, function (err, results, fields) {
        console.table(results);
        startLoop(choices);
      });

      //View All Employees
    } else if (res.choices === "View all employees") {
      //query the db and return it to the console table
      const sql = `SELECT * FROM employee`;
      db.query(sql, function (err, results, fields) {
        console.table(results);
        startLoop(choices);
      });

      //Add a department
    } else if (res.choices === "Add a department") {
      start(addDepartmentQ).then(res => {
        //prepared statement
        const sql = `INSERT INTO department (department_name)
          VALUES (?)`;
        const params = res.department;

        //query the db and return it to the console table
        db.query(sql, params, function (err, results, fields) {
          console.table(results);
          startLoop(choices);
        });
      });

      //Add a role
    } else if (res.choices === "Add a role") {
      //query the db and return it to the console table
      start(addRoleQ).then(res => {
        //prepared statement
        const sql = `INSERT INTO employee_role (title, salary, department_id)
        VALUES (?,?,?)`;
        const params = [res.role, res.salary, res.id];
        console.log(params);
        //query the db and return it to the console table
        db.query(sql, params, function (err, results, fields) {
          console.table(results);
          startLoop(choices);
        });
      });

      //Add an employee
    } else if (res.choices === "Add an employee") {
      start(addEmployeeQ).then(res => {
        //prepared statement
        const sql = `INSERT INTO employee (first_name, last_name, role_id)
        VALUES (?,?,?)`;
        const params = [res.first, res.last, res.roleid];
        console.log(params);
        //query the db and return it to the console table
        db.query(sql, params, function (err, results, fields) {
          console.table(results);
          startLoop(choices);
        });
      });

      //Add a update role
    } else if (res.choices === "Update an employee role") {
      let sql = `SELECT * FROM employee`;
      db.query(sql, function (err, results, fields) {
        console.table(results);
        start(updateEmployeeQ).then(res => {
          //prepared statement
          let sql = `UPDATE employee SET role_id = ? 
          WHERE id = ?`;
          const params = [res.newid, res.id];
          console.log(params);
          //query the db and return it to the console table
          db.query(sql, params, function (err, results, fields) {
            console.table(results);
            startLoop(choices);
          });
        });
      });
    }
  });
};

const choices = {
  type: "list",
  name: "choices",
  message: "What would you like to do?",
  choices: [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee role",
  ],
};
let text = `█───█─▄▀▀─█───▄▀▀─▄▀▀▄─█▄─▄█─▄▀▀
█───█─█───█───█───█──█─█▀▄▀█─█──
█───█─█▀▀─█───█───█──█─█─▀─█─█▀▀
█▄█▄█─█───█───█───█──█─█───█─█──
─▀─▀───▀▀──▀▀──▀▀──▀▀──▀───▀──▀▀`;
console.table(text);
startLoop(choices);
