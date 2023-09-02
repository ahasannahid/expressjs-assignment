exports.create = async (req, res) => {
   await res.status(201).send("Create Project API");
  };
 
 
 exports.read = async (req, res) => { 
    await res.status(201).send("Read Project API");
 };
 
 
 exports.delete = async (req, res) => {
    await res.status(201).send("Delete Project API");
  };
 
 
 exports.update = async (req, res) => {
    await res.status(201).send("Update Project API");
 };