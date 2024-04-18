import  { ModelUsers } from "../lib/modelUsers.js"

const modelUsers=ModelUsers();

const getAll=()=>{
    const users=modelUsers.getAll();
      return users;
    }

const getById=(id)=>{
  /*  const groupId=parseInt(req.params.id); */
      const foundUser=modelUsers.getById(id);
      /* console.log(res.json); */
      /* return res.json(foundGroup); */
      return foundUser;
}

const create=(newUser)=>{
  /* console.log(newGroup) */
  /* console.info(req.body)
  const group=req.body; */

  console.log("estoy creando el grupo")
  
  const alreadyThere=modelUsers.getByName(newUser.name);

  console.log(newUser.name);
  console.log(alreadyThere);
  if(alreadyThere){
      /* res.status(409); */
      /* res.json("El nombre del grupo ya existe") */
      return false;
  }
  const user = modelUsers.create(newUser);
  console.log(newUser)
  /* res.status(201).json(group); */
  return user;
}

const update=(user)=>{
  const userUpdate=modelUsers.update(user.id, user);
  if(userUpdate){
    return user;
  }else{
    return null;
  }
}

const del=(id)=>{
   return modelUsers.delete(id);
}
 
export default {
  getAll,
  getById,
  create,
  update,
  delete:del
}      
  