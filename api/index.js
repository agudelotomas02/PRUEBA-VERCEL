const express = require("express");
const app = express();
const serverless = require("serverless-http");

const users = {
  1: {
    name: "Juan José",
    lastName: "Gomez Saavedra",
    email: "juangomsaa@unisabana.edu.co",
    id: "0000320999",
  },
  2: {
    name: "Sergio Tomás",
    lastName: "Agudelo Rivera",
    email: "sergioagri@unisabana.edu.co",
    id: "0000167400"
  }
};

app.use(express.json());

app.get("/user-info/:id", (req, res) => {
  const studentId = req.params.id;
  if (users[studentId]) {
    res.json(users[studentId]);
  } else {
    res.status(404).json({ message: "Id no válido" });
  }
});

// Lo importante:
module.exports = app;
module.exports.handler = serverless(app);
