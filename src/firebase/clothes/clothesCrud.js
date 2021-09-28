import firebase from "firebase/compat";
import getFirebase from "../firebase";

getFirebase();
var clothesRef = firebase.firestore().collection("/clothes");
let paginationPointer = undefined;

export const getAllProducts = async ({
  payload = {
    type: "all",
    gender: "Uni",
    limit: 6,
    sortBy: "price",
    orderBy: "asc",
    filter: "",
  },
}) => {
  var clothes = [];

  const first = clothesRef.limit(1);

  const snapshot = await first.get();

  // Get the last document
  if (paginationPointer === undefined) {
    paginationPointer = snapshot.docs[snapshot.docs.length - 1];
  }
  let clothesQuery = clothesRef;
  if (payload.type !== "all") {
    clothesQuery = clothesQuery.where("type", "==", payload.type);
  }
  return await clothesQuery
    .limit(payload.limit)
    .orderBy(payload.sortBy, payload.orderBy)
    .get()
    .then(function (snapshot) {
      paginationPointer = snapshot.docs[snapshot.docs.length - 1];
      snapshot.forEach(function (childSnapshot) {
        var id = childSnapshot.id;
        var data = childSnapshot;

        clothes.push({
          id: id,
          name: data.get("name"),
          imageUrl: data.get("imageUrl"),
          price: data.get("price"),
          gender: data.get("gender"),
          type: data.get("type"),
          author: data.get("author"),
        });
      });
    })
    .catch((e) => console.log("Wtf", e))
    .then(() => {
      return clothes;
    });
};

export const addCloth = ({
  name,
  currency,
  imageUrl,
  price,
  type,
  gender,
  date,
  author,
}) => {
  clothesRef
    .add({
      name,
      currency,
      imageUrl,
      price: Number(price),
      type,
      gender,
      date,
      author,
    })
    .then(function (docRef) {
      alert("Cloth added");
    })
    .catch(function (error) {
      alert("Error adding Cloth");
    });
};

export const deleteCloth = ({ userId, clothId }) => {
  console.log(clothId);
  firebase
    .auth()
    .currentUser.getIdTokenResult()
    .then((idTokenResult) => console.log(idTokenResult));
  clothesRef.doc(clothId).delete();
};
