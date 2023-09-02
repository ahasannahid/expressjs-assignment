exports.create = async (req, res) => {
   await res.status(201).send("Create Product API");
  };
 
 
 exports.read = async (req, res) => { 
    await res.status(201).send("Read Product API");
 };
 
 
 exports.delete = async (req, res) => {
   await res.status(201).send("Delete Product API");
  };
 
 
 exports.update = async (req, res) => {
    await res.status(201).send("Update Product API");
 };