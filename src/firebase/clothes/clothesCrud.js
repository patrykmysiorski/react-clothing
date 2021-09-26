import firebase from "firebase/compat";
import getFirebase from "../firebase";

getFirebase();
var clothesRef = firebase.firestore().collection("/clothes");
let paginationPointer = undefined;

export const getAll = async ({ payload }) => {
  var clothes = [];

  const first = clothesRef.limit(1);

  const snapshot = await first.get();

  // Get the last document
  if (paginationPointer === undefined) {
    paginationPointer = snapshot.docs[snapshot.docs.length - 1];
  }

  /*sssadasd
                                                          * // Get the last document
                                                          if (paginationPointer === undefined) {
                                                            paginationPointer = snapshot.docs[snapshot.docs.length - 1];
                                                          }
                                                          console.log("hi", payload);
                                                          // Construct a new query starting at this document.
                                                          // Note: this will not have the desired effect if multiple
                                                          // cities have the exact same population value.
                                                          if (payload.type !== "all") {
                                                            clothesRef.where("type", "==", payload.type);
                                                          }
      
                                                          // if (payload.filter !== "") {
                                                          //   clothesRef
                                                          //     .where("name", ">=", filter)
                                                          //     .where("name", "<=", filter + "\uf8ff");
                                                          // }
      
                                                          return await clothesRef
                                                            .where("type", "==", payload.type)
                                                            .limit(payload.limit)
                                                            .orderBy(payload.sortBy, payload.orderBy)
                                                            .get()
                                                            .then(function (snapshot) {
                                                              paginationPointer = snapshot.docs[snapshot.docs.length - 1];
                                                              console.log(snapshot);
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
                                                                });
                                                              });
                                                            })
                                                            .then(() => {
                                                              return clothes;
                                                            });*/
  // Construct a new query starting at this document.
  // Note: this will not have the desired effect if multiple
  // cities have the exact same population value.
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
      price,
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
