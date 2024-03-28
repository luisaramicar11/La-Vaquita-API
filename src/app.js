import express from "express"
import cors from "cors"

//creo una aplicacion express y la asigno a la variable app
const app=express()
const port=3000

//Al usar express.json(), se espera que las solicitudes entrantes tengan un cuerpo en formato JSON. Este middleware analiza ese cuerpo y lo convierte en un objeto JavaScript
app.use(express.json());
app.use(cors());

const groupDB=[
    {
        name:"casa",
        color:"white",
        state:{oweMe:0, owe:0},
        participants:2,
        expenses:[
            {1:{
                expense:"mercado",
            value:12000,
            stateExpense:{
                noParticipate:true,
                lend:false,
                lendMe:false
            }}},
            {2:{
                expense:"mercado",
            value:12000,
            stateExpense:{
                noParticipate:true,
                lend:false,
                lendMe:false
            }}}
        ]
    },{
        name:"trabajo",
        color:"white",
        state:{oweMe:0, owe:0},
        participants:2,
        expenses:[
            {1:{
                expense:"papeleria",
            value:12000,
            stateExpense:{
                noParticipate:true,
                lend:false,
                lendMe:false
            }}},
            {2:{
                expense:"almuerzo",
            value:12000,
            stateExpense:{
                noParticipate:true,
                lend:false,
                lendMe:false
            }}}
        ]
    },
    {
        name:"compañeros",
        color:"white",
        state:{oweMe:0, owe:0},
        participants:2,
        expenses:[
            {1:{
                expense:"papeleria",
            value:12000,
            stateExpense:{
                noParticipate:true,
                lend:false,
                lendMe:false
            }}},
            {2:{
                expense:"almuerzo",
            value:12000,
            stateExpense:{
                noParticipate:true,
                lend:false,
                lendMe:false
            }}}
        ]
    },
]

app.get("/groups", (req, res)=>{
    const orderGroups=groupDB.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      });
      return res.json(orderGroups)
    });
 
//define una ruta GET en la aplicación Express.js que escucha las solicitudes en la URL /pets/:name. El :name en la ruta indica un parámetro dinámico llamado name
app.get("/groups/:name", (req, res)=>{
    console.info(req.params)
    const groupName=req.params.name;
    const foundGroup=groupDB.find(group=>group.name === groupName);
    res.json(foundGroup)
})

app.post("/groups", (req, res)=>{
    //obtengo cuerpo de la solicitud post
    const group=req.body;
    const groupName=group.name;

    const alreadyThere=groupDB.some(group=>group.name===groupName);
    if(alreadyThere){
        res.status(409);
        res.json("El nombre del grupo ya existe")
        return;
    }
    groupDB.push({
        name:group.name,
        color:group.color,
        state:group.state,
        expenses:group.expenses
    });
    res.status(201).json(group);
}) 

app.listen(port, ()=>console.info(`up and running at port=${port}`))