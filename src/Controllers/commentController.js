exports.create = async (req, res) => {
    await res.status(201).send("Create Comment API");
};


exports.read = async (req, res) => {
    await res.status(201).send("Read Comment API");
};


exports.delete = async (req, res) => {
    await res.status(201).send("Delete Comment API");
};


exports.update = async (req, res) => {
    await res.status(201).send("Update Comment API");
};