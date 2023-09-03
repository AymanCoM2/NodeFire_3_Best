var admin = require("firebase-admin");

var serviceAccount = require("./../v.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://laraveltesting-4c918-default-rtdb.firebaseio.com",
});

const db = admin.firestore();
module.exports = { admin, db };
