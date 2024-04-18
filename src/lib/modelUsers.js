const ModelUsers = () => {
  const entities = [
    {
      id:1,
      name:"jorge",
      email:"jorge@gmail.com",
      password:"123",
      fechaCreacion:"2023/01/12"
  },{
      id:2,
      name:"ana",
      email:"ana@gmail.com",
      password:"123",
      fechaCreacion:"2023/01/12"
  },
  {   id:3,
      name:"sergio",
      email:"sergio@gmail.com",
      password:"123",
      fechaCreacion:"2023/01/12"
  },
  ];


  const getById = (id) => {
    return entities.find((entity) => entity.id === id);
  };

  const getByName = (name) => {
    return entities.find((entity) => entity.name.toLocaleLowerCase() === name.toLocaleLowerCase());
  };

  const getAll = () => {
    return entities;
  };

  const create = (entity) => {

    const maxId = entities.reduce((max, { id }) => Math.max(max, id), 0);
    const newId = (maxId + 1).toString();
    const newEntity = {
      ...entity,
      id: parseInt(newId),
    };
    entities.push(newEntity);

    return newEntity;
  };

  const update = (id, newEntity) => {
  
    const entityIndex = entities.findIndex((entity) => entity.id === id);

    if (entityIndex !== -1) {
      entities[entityIndex] = newEntity;

      return true;
    }

    return false;
  };

  const del = (id) => {

    const entityIndex = entities.findIndex((entity) => entity.id === id);

    if (entityIndex !== -1) {
      entities.splice(entityIndex, 1);

      return true;
    }

    return false;
  };

  return {
    getById,
    getByName,
    getAll,
    create,
    delete: del,
    update,
  };
};

export { ModelUsers };
