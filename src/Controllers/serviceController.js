exports.create = async (req, res) => {
    await res.status(201).send("Create Service API");
  };
 
 
 exports.read = async (req, res) => { 
    await res.status(201).send("Read Service API");
 };
 
 
 exports.delete = async (req, res) => {
    await res.status(201).send("Delete Service API");
  };
 
 
 exports.update = async (req, res) => {
     await res.status(201).send("Update Service API");
 };