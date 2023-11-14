// Dummy data - replace this with a database in a real application
const users = [
  {
    id: 1,
    userName: "Ahmad01",
    password: "Test@123",
    name: "Ahmad Nawaz",
    group: "A",
  },
  {
    id: 2,
    userName: "Ali01",
    password: "Test@123",
    name: "Ali Mateen",
    group: "A",
  },
  {
    id: 3,
    userName: "Asad01",
    password: "Test@123",
    name: "Asad Abbas",
    group: "A",
  },
  {
    id: 4,
    userName: "John01",
    password: "Test@123",
    name: "John Doe",
    group: "B",
  },
];

let tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is the first task",
    group: "A",
    status: "PENDING",
    createdBy: "1", //user Id
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is the second task",
    group: "A",
    status: "PENDING",
    createdBy: "1",
  },

  {
    id: 3,
    title: "Task 1",
    description: "This is the first task",
    group: "B",
    status: "PENDING",
    createdBy: "2",
  },
];

//  Server
import express from "express";
const app = express();
const PORT = 4000;

app.use(express.json());

// POST- logIn user
app.post("/logIn", (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const user = users.find(
    (user) => user.userName === userName && user.password === password
  );

  if (!item) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(item);
});

// GET - Retrieve all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET - Retrieve tasks against the user group
app.get("/tasks/:group", (req, res) => {
  const itemId = parseInt(req.params.group);
  const item = tasks.find((item) => item.group === itemId);

  if (!item) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(item);
});

// POST - Create a new task
app.post("/tasks", (req, res) => {
  const newItem = {
    id: tasks.length + 1,
    name: req.body.name, // Assuming request body contains { "name": "New Item" }
    title: req.body.title,
    description: req.body.description,
    group: req.body.group,
    status: "PENDING",
    createdBy: req.body.createdBy,
  };
  tasks.push(newItem);
  res.status(201).json(newItem);
});

// PUT - Update task status
app.put("/tasks/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemToUpdate = tasks.find((item) => item.id === itemId);

  if (!itemToUpdate) {
    return res.status(404).json({ message: "Item not found" });
  }

  itemToUpdate.status = req.body.status;
  res.json(itemToUpdate);
});

// DELETE - Delete the task
app.delete("/tasks/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  tasks = tasks.filter((item) => item.id !== itemId);
  res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});