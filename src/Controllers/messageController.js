exports.create = async (req, res) => {
    await res.status(201).send("Create Message API");
  };
 
 
 exports.read = async (req, res) => { 
    await res.status(201).send("Read Message API");
 };
 
 
 exports.delete = async (req, res) => {
    await res.status(201).send("Delete Message API");
  };
 
 
 exports.update = async (req, res) => {
    await res.status(201).send("Update Message API");
 };