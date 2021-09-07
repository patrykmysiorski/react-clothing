import firebase from "firebase/compat";
import getFirebase from "../firebase";

getFirebase();
var tutorialsRef = firebase.firestore().collection("/clothes");

export const getAll = async () => {
  var tutorials = [];
  return await tutorialsRef
    .get()
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var id = childSnapshot.id;
        var data = childSnapshot;

        tutorials.push({
          id: id,
          title: data.get("name"),
          imageUrl: data.get("imageUrl"),
          price: data.get("price"),
          sex: data.get("sex"),
          type: data.get("type"),
        });
      });
    })
    .then(() => {
      return tutorials;
    });
};

export const addCloth = (name, imageUrl, price, type, sex) => {
  tutorialsRef
    .add({
      name,
      imageUrl,
      price,
      type,
      sex,
    })
    .then(function (docRef) {
      console.log("Tutorial created with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding Tutorial: ", error);
    });
};
