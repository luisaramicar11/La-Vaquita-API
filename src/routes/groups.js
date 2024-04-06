import express from "express"
import groupController from "../controllers/groups.js"

const router=express.Router();

router.get("/groups", groupController.getAll);
router.get("/groups/:id", groupController.get);
router.post("/groups", groupController.create);
/* router.put("/groups/", groupService.updateGroup);
router.delete("/groups", groupService.deleteGroup); */

export {router};