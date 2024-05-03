// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your firebase config here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// add new blog to the data base
export async function addBlog(data) {
  const docRef = await addDoc(collection(db, "blogs"), {
    timestamp: serverTimestamp(),
    data: data,
  });

  console.log("Document written with ID: ", docRef.id);
}

// get all blogs
export async function getBlogs() {
  // Query a reference to a subcollection
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const postsList = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    postsList.push({ id: doc.id, ...doc.data() });
  });

  return postsList;
}

// get one blog
export async function getBlog(id) {
  const docRef = doc(db, "blogs", id);
  const docSnap = await getDoc(docRef);

  console.log(id);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return "No such document!";
  }
}
