import Router from 'express-promise-router'
import groupController from "../controllers/groups.js"

const router=Router();

router.get("/groups", groupController.getAll);
router.get("/groups/:id", groupController.get);
router.post("/groups", groupController.create);
router.put("/groups/:id", groupController.update);
router.delete("/groups/:id", groupController.delete);

export {router};