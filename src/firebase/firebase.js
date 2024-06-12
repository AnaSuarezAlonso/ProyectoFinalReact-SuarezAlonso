// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUiEidmeGBKtJBVRWBTCV22vhkOfRs8o",
  authDomain: "proyectofinalreact-b28c7.firebaseapp.com",
  projectId: "proyectofinalreact-b28c7",
  storageBucket: "proyectofinalreact-b28c7.appspot.com",
  messagingSenderId: "833641170914",
  appId: "1:833641170914:web:bd3955db4ffeb2cdaadbbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export async function getProducts() {
  const productsRef = collection(db, 'items')
  const response = await getDocs(productsRef)
  const productsList = []

  response.forEach((doc)=> productsList.push({ id: doc.id, ...doc.data()}))

  return productsList
}

export async function getProductByCategory(category) {
  const productsRef = collection(db, 'items')
  const q = query(productsRef, where('category', '==', category))
  const response = await getDocs(q)
  const categoryList = []

  response.forEach((doc)=> categoryList.push({ id: doc.id, ...doc.data()}))
  return categoryList
}


export async function getProductById(id) {
  const productsRef = doc(db, 'items', id)
  const response = await getDoc(productsRef)

  if (response.exists()) {
    const productById = {...response.data(), id: response.id}
    return productById
  } else {
    return null
  }
}
