exports.create = async (req, res) => {
    await res.status(201).send("Create Blog details API");
  };
 
 
 exports.read = async (req, res) => { 
    await res.status(201).send("Read Blog details API");
 };
 
 
 exports.delete = async (req, res) => {
    await res.status(201).send("Delete Blog details API");
  };
 
 
 exports.update = async (req, res) => {
     await res.status(201).send("Update Blog details API");
 };