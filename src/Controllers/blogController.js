exports.create = async (req, res) => {
    await res.status(201).send("Create Blog API");
 };


exports.read = async (req, res) => { 
    await res.status(201).send("Read Blog API");
};


exports.delete = async (req, res) => {
    await res.status(201).send("Delete Blog API");
 };


exports.update = async (req, res) => {
    await res.status(201).send("Update Blog API");
};