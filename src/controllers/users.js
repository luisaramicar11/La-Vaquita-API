import userService from "../services/users.js"

const getAll=(req, res)=>{
    const users=userService.getAll();
    res.json(users);
  }

const get = (req, res) =>{
    const userId=parseInt(req.params.id);
    const user=userService.getById(userId);
    if(user == null || user == undefined){
        res.status(404);
        return;
    }
    res.status(200).json(user);
}  

const create=(req, res)=>{
    const newUser=req.body;
    if(newUser?.name && newUser?.name.length>100){
        return res.status(400).json({message:"El nombre del usuario no debe superar los 100 caracteres"})
    }else if(!newUser?.name){
        return res.status(400).json({message:"El usuario debe tener un nombre"})
    }else if(!(/a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(newUser?.password))){
        return res.status(400).json({message:"El correo debe tener un formato válido"})
    }
    console.log(req.body);
    const createUser=userService.create(newUser);
    if(!createUser){
        return res.status(400).json({message:"Ocurrio un error"})
    }
    res.status(201).json(createUser);
 }

 const update=(req, res)=>{
    const userUpdate=req.body;
    const createUser=userService.update(userUpdate);
    if(createUser===null){
        return res.status(400).json({message:"Ocurrio un error"})
    }
    res.status(200).json(createUser)
 }

 const del=(req, res)=>{
    const userId=parseInt(req.params.id);
    const user=userService.delete(userId);
    if(user){
        return res.status(200).json({message:"Se ha eliminado el usuario"})
    }else{
        return res.status(400).json({message:"Ocurrio un error al eliminar el usuario"})
    }
}

export default {
    getAll, 
    get, 
    create,
    update,
    delete: del
}