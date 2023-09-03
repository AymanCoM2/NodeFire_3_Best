const firebase = require("firebase");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs7P4ZnSPLs16Fx0IX_2VmOmocKe0qJ8g",
  authDomain: "laraveltesting-4c918.firebaseapp.com",
  databaseURL: "https://laraveltesting-4c918-default-rtdb.firebaseio.com",
  projectId: "laraveltesting-4c918",
  storageBucket: "laraveltesting-4c918.appspot.com",
  messagingSenderId: "553971764190",
  appId: "1:553971764190:web:c8723408dd4908dfbf2b4f",
  measurementId: "G-JSHYGDXEJ9",
};

firebase.initializeApp(firebaseConfig); //initialize firebase app
module.exports = { firebase }; //export the app
