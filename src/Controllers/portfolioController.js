exports.create = async (req, res) => {
   await res.status(201).send("Create Portfolio API");
  };
 
 
 exports.read = async (req, res) => { 
    await res.status(201).send("Read Portfolio API");
 };
 
 
 exports.delete = async (req, res) => {
    await res.status(201).send("Delete Portfolio API");
  };
 
 
 exports.update = async (req, res) => {
     await res.status(201).send("Update Portfolio API");
 };