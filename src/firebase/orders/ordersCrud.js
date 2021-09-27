import getFirebase from "../firebase";
import firebase from "firebase/compat";

getFirebase();
var ordersRef = firebase.firestore().collection("orders");

export const postOrder = async (order) => {
  console.log(order);
  console.log(await firebase.firestore().collection(`orders`).add(order));
};

export const getOrders = async (uid) => {
  let orders = [];
  return await ordersRef
    .where("uid", "==", uid)
    .get()
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var id = childSnapshot.id;
        var data = childSnapshot;
        orders.push({
          address: data.get("address"),
          address2: data.get("address2"),
          city: data.get("city"),
          country: data.get("country"),
          delivery: data.get("delivery"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          region: data.get("region"),
          zip: data.get("zip"),
        });
      });
    })
    .catch((e) => console.log("Wtf", e))
    .then(() => {
      console.log(orders);
      return orders;
    });
};
