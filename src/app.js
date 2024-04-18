import express from "express"
import cors from "cors"
import {router} from "./routes/groups.js"
import {routerUsers} from "./routes/users.js"

const app=express()
const port=3000

app.use(express.json())
app.use(cors());
app.use(router);
app.use(routerUsers);

app.listen(port, ()=>console.info(`up and running at port=${port}`))