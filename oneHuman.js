const { db } = require("./utils/admin");

// Function to get documents by UserCode
exports.oneHuman = async (req, res) => {
  const UserCode = req.params.UserCode;

  try {
    console.log("Trying to find UserCode:", UserCode);
    const querySnapshot = await db
      .collection("Users")
      .where("UserCode", "==", UserCode)
      .get();

    if (!querySnapshot.empty) {
      const userData = [];

      // Loop through each document in the QuerySnapshot
      querySnapshot.forEach((doc) => {
        // Access the data in each document
        const user = doc.data();
        userData.push(user); // Add the user data to the array
      });

      // Send the array of user data as a JSON response
      res.status(200).json(userData);
    } else {
      // No documents found with the given UserCode, send a 404 error response
      console.log("User not found.");
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user documents:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
