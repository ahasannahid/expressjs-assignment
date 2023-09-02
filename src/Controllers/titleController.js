exports.create = async (req, res) => {
    await res.status(201).send("Create Title API");
  };
 
 
 exports.read = async (req, res) => { 
     await res.status(201).send("Read Title API");
 };
 
 
 exports.delete = async (req, res) => {
     await res.status(201).send("Delete Title API");
  };
 
 
 exports.update = async (req, res) => {
     await res.status(201).send("Update Title API");
 };