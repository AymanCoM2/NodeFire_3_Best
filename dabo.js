const { db } = require("./utils/admin");

exports.human = async (req, res) => {
  const humansRef = db.collection("Users");
  // const humansRef = db.collection("collection1");
  try {
    humansRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      return res.status(201).json(data);
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
