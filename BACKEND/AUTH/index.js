const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
app.use(express.json());
const notes = [];
const users = [];
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.json({
      message: "User already exists"
    });
  }
  users.push({
    username: username,
    password: password
  });
  res.json({
    message: "You have signed up"
  });
});
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(user => user.username === username && user.password === password);
  if (!userExists) {
    res.status(403).json({
      message: "Incorrect Credentials"
    });
    return;
  }
  const token = jwt.sign({
    username: username
  }, "heyitsdibyanshumoura07")
  res.json({
    token: token
  });
});
// This is now an authenticated endpoint
app.post("/notes", (req, res) => {
  const token = req.headers.token;
  const decoded = jwt.verify(token, "heyitsdibyanshumoura07");
  const username = decoded.username;
  if (!username) {
    res.status(403).json({
      message: "malformed token"
    });
  }
  const { note } = req.body;
  notes.push({username, note});
  res.json({
    message: "Done"
  });
});
// This is also an authenticated endpoint
app.get("/notes", (req, res) => {
  const token = req.headers.token;
  const decoded = jwt.verify(token, "heyitsdibyanshumoura07");
  const username = decoded.username;
  if (!username) {
    res.status(403).json({
      message: "malformed token"
    });
  }
  const userNotes = notes.filter(note => note.username === username);
  res.json({
    notes: userNotes
  });
});
app.get("/", (req, res) => {
  res.sendFile(
    "/home/dibyanshu/code/WEB-DEVELOPMENT/BACKEND/AUTH/frontend/index.html",
  );
});

app.get("/signup", (req, res) => {
  res.sendFile("/home/dibyanshu/code/WEB-DEVELOPMENT/BACKEND/AUTH/frontend/signup.html");
});

app.get("/signin", (req, res) => {
  res.sendFile("/home/dibyanshu/code/WEB-DEVELOPMENT/BACKEND/AUTH/frontend/signin.html");
});

app.listen(3000);
