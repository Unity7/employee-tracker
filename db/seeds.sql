INSERT INTO department (department_name)
VALUES
  ('Accounting'),
  ('Sales'),
  ('Marketing'),
  ('Customer Support'),
  ('IT Support'),
  ('Operations'),
  ('Software Development'),
  ('Corporate');

  INSERT INTO employee_role (title, salary, department_id)
  VALUES
  ('Accountant', 50000, 1),
  ('Accounting Manager', 70000, 1),
  ('Sales Rep', 50000, 2),
  ('Sales Manager', 70000, 2),
  ('Marketing Manager', 70000, 3),
  ('Customer Support Rep', 50000, 4),
  ('Customer Support Manager', 70000, 4),
  ('IT Tech', 70000, 5),
  ('Inventory Manager', 70000, 6),
  ('Software Developer', 90000, 7),
  ('COO', 120000, 8),
  ('CFO', 150000, 8),
  ('CEO', 250000, 8);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('John', 'Smith', 1),
('Nancy', 'Perez', 2),
('Tony', 'Johnson', 3),
('Thomas', 'Freeman', 4),
('Gabriel', 'Juno', 5),
('Nancy', 'Perez', 6),
('Tony', 'Johnson', 7),
('Thomas', 'Freeman', 8),
('Jake', 'Uther', 9),
('Tors', 'Ullrich', 10),
('Floki', 'The Boat Builder', 11),
('Bjorn', 'Ironside', 12),
('Ragnar', 'Lothbrok', 13);