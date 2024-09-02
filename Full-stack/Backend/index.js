import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
// import bcrypt from "bcrypt";

// const express = require("express");
// const cors = require("cors");

const mySecret = "shashwat1234";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'values.json');

const readData = () => {
  if (fs.existsSync(filePath)) {
    let data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return [];
};

// // Function to write data to the JSON file
// const writeData = (data) => {
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 3));
// };

// app.post('/signup', (req, res) => {
//   let { name, email, password } = req.body;
//   const existingData = readData();

//   const bcryptPassword = bcrypt.hashSync(password, 10);
//   const newData = {
//     id: Math.floor(Math.random() * 1000).toString(),
//     name,
//     email,
//     password: bcryptPassword
//   }
//   console.log(newData)
//   const updatedData = [...existingData, newData];
//   writeData(updatedData);
//   res.status(201).json(newData);
// });

// app.get('/', (req, res) => {
//   res.send("welcome to the node world")
// })

// app.post('/signin', (req, res) => {
//   const { email, password } = req.body;
//   const data = readData();
//   const user = data.find(user => user.email === email && bcrypt.compareSync(password, user.password));
//   if (user) {
//     res.status(200).json({
//       message: "login success",
//     });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// })

app.get("/", (req, res) => {
  const data = readData()
  res.status(200).json(data)
})




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
