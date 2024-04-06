import groupService from "../services/groups.js"

const getAll=(req, res)=>{
    const groups=groupService.getAll();
    res.json(groups);
  }

const get = (req, res) =>{
    const groupId=parseInt(req.params.id);
    const group=groupService.get(groupId);
    if(group == null || group == undefined){
        res.status(404);
        return;
    }
    res.status(200).json(group);
}  

const create=(req, res)=>{
    const newGroup=req.body;
    console.log(req.body);
    const createGroup=groupService.create(newGroup);
    res.status(201).json(createGroup);
 }

export default {
    getAll, 
    get, 
    create
}