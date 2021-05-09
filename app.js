const inquirer = require("inquirer");
const cTable = require("console.table");
// const db = require("../../db/connection");

const start = questions => {
  return inquirer.prompt(questions);
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

start(choices).then(res => {
  if (res.choices === "View all departments") {
    //query the db and return it to the console table
    let table;
    console.table(table);
  } else if (res.choices === "View all roles") {
    //query the db and return it to the console table
    let table;
    console.table(table);
  } else if (res.choices === "View all employees") {
    //query the db and return it to the console table
    let table;
    console.table(table);
  } else if (res.choices === "Add a department") {
    //query the db and return it to the console table
    let table;
    console.table(table);
  } else if (res.choices === "Add a role") {
    //query the db and return it to the console table
    let table;
    console.table(table);
  } else if (res.choices === "Add an employee") {
    //query the db and return it to the console table
    let table;
    console.table(table);
  } else if (res.choices === "Update an employee role") {
    //query the db and return it to the console table
    let table;
    console.table(table);
  }
});
