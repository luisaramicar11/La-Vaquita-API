import groupDB from "../database/memory.js";
import  { Model } from "../lib/model.js"

const model=Model();

const getAll=()=>{
    const orderGroups=model.getAll().sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
      return orderGroups;
    }

const getById=(id)=>{
  /*  const groupId=parseInt(req.params.id); */
      const foundGroup=model.getById(id);
      /* console.log(res.json); */
      /* return res.json(foundGroup); */
      return foundGroup;
}

const create=(newGroup)=>{
  /* console.log(newGroup) */
  /* console.info(req.body)
  const group=req.body; */

  console.log("estoy creando el grupo")
  
  const alreadyThere=model.getByName(newGroup.name);

  console.log(newGroup.name);
  console.log(alreadyThere);
  if(alreadyThere){
      /* res.status(409); */
      /* res.json("El nombre del grupo ya existe") */
      return false;
  }
  const group = model.create(newGroup);
  console.log(newGroup)
  /* res.status(201).json(group); */
  return group;
}

const update=(group)=>{
  const groupUpdate=model.update(group.id, group);
  if(groupUpdate){
    return group;
  }else{
    return null;
  }
}

const del=(id)=>{
   return model.delete(id);
}
 
export default {
  getAll,
  getById,
  create,
  update,
  delete:del
}      
  