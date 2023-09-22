import {doc, getDoc, getDocs, addDoc, collection, getFirestore, query, where} from 'firebase/firestore';

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const itemDoc = doc(db, "items", id);
    getDoc(itemDoc).then((doc) => {
      if (doc.exists()){
        resolve({id: doc.id, ...doc.data()});
      } else {
        resolve(null);
      }
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

  export const getProducts = (category) => {
    return new Promise((resolve, reject) => {

      const db = getFirestore();
      const itemCollection = collection(db, "items");
      let q;
      if (category) {
        q = query(itemCollection, where("category","==", category));
      } else {
      q = query(itemCollection);
      }
      getDocs(q).then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data()};
        });
          resolve(products);
        }).catch((err) => {
          reject(err);
        });     
      });
    };

export const createOrder = (orderr) => {
  const db = getFirestore();
  const order = collection(db, 'orders');
  return addDoc(order, orderr);
};
