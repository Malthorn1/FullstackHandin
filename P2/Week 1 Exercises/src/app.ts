require('dotenv').config();
import express from "express";
import path from "path";
const app = express();
import {UserFacade} from "./facades/userFacade"
UserFacade.testusers()

app.get("/api/pop", (req, res) => {
  UserFacade.testusers()
})

app.get("/api/users/:id", (req, res) => {
  let name = req.params.id
  res.status(200).json(UserFacade.getUser(name))
})

app.get("/api/users/", (req, res) => {
  res.status(200).json(UserFacade.getAllUsers())
})

app.post("/api/users/id", async(req:any, res:any) => {
if (await UserFacade.addUser(req.body))
res.status(200).send("user added");
else res.status(400).send("WOOOPS")
})

app.delete("/api/users/delete/:id", async(req:any, res:any) => {
  if(await UserFacade.deleteUser(req.params.id))
  
  res.status(200).send("user deleted")
  else res.status(400).send("woops")

})

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


