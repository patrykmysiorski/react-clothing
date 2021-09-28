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
          orderId: id,
          address: data.get("address"),
          products: data.get("products"),
          uid: data.get("uid"),
          date: data.get("date"),
        });
      });
    })
    .catch((e) => console.log("Wtf", e))
    .then(() => {
      console.log(orders);
      return orders;
    });
};
