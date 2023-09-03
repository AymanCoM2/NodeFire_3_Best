const { db } = require("./utils/admin");

exports.addHuman = async (req, res) => {
  const { UserName, ID } = req.body;
  console.log("Request Body");
  console.log(req.body);
  if (!UserName || !ID) {
    return res
      .status(400)
      .json({ error: "UserName and ID are required fields" });
  }
  const humansRef = db.collection("Users");
  try {
    const docRef = await humansRef.add({
      UserName,
      ID,
    });

    const newDocumentId = docRef.id;
    return res.status(201).json({
      message: "Document added successfully",
      documentId: newDocumentId,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong, please try again" });
  }
};
