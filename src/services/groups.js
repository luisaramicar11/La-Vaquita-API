import groupDB from "../database/memory.js";

const getAll=()=>{
    const orderGroups=groupDB.sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
      return orderGroups;
    }

const get=(id)=>{
  /*  const groupId=parseInt(req.params.id); */
      const foundGroup=groupDB.find(group=>group.id === id);
      /* console.log(res.json); */
      /* return res.json(foundGroup); */
      return foundGroup;
}

const create=(newGroup)=>{
  /* console.log(newGroup) */
  /* console.info(req.body)
  const group=req.body; */
  const groupId=newGroup.id;
  console.log("estoy creando el grupo")
  

  const alreadyThere=groupDB.some(group=>group.id===groupId);
  if(alreadyThere){
      /* res.status(409); */
      /* res.json("El nombre del grupo ya existe") */
      return false;
  }
  groupDB.push({
      id:newGroup.id,
      name:newGroup.name,
      color:newGroup.color,
      state:newGroup.state,
  });
  console.log(groupDB)
  /* res.status(201).json(group); */
  return newGroup;

}
 
export default {
  getAll,
  get,
  create
}      
  