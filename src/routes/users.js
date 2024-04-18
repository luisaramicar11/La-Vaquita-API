import express from "express"
import userController from "../controllers/users.js"

const routerUsers=express.Router();

routerUsers.get("/users", userController.getAll);
routerUsers.get("/users/:id", userController.get);
routerUsers.post("/users", userController.create);
routerUsers.put("/users/:id", userController.update);
routerUsers.delete("/users/:id", userController.delete);

export {routerUsers};