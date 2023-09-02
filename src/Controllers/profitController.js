exports.create = async (req, res) => {
   await res.status(201).send("Create Profit API");
  };
 
 
 exports.read = async (req, res) => { 
    await res.status(201).send("Read Profit API");
 };
 
 
 exports.delete = async (req, res) => {
    await res.status(201).send("Delete Profit API");
  };
 
 
 exports.update = async (req, res) => {
    await res.status(201).send("Update Profit API");
 };