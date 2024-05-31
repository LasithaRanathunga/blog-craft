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
  setDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX3hXSjaVa6drWK4xXlR262UZ70Xg7bgw",
  authDomain: "blog-project-f941a.firebaseapp.com",
  projectId: "blog-project-f941a",
  storageBucket: "blog-project-f941a.appspot.com",
  messagingSenderId: "616490757360",
  appId: "1:616490757360:web:981cb798842f2091b16635",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// add new blog to the data base
export async function addBlog(heading, imgUrl, discription, data) {
  const docRef = await addDoc(collection(db, "blogs"), {
    timestamp: serverTimestamp(),
    heading: heading,
    imgUrl: imgUrl,
    discription: discription,
    data: data,
  });

  if (docRef.id) {
    console.log("Document written with ID: ", docRef.id);
  } else {
    throw new Error("ooops! Somethis went wrong");
  }
}

// get all blogs
export async function getBlogs() {
  // Query a reference to a subcollection
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const postsList = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    postsList.push({ id: doc.id, ...doc.data() });
  });

  return postsList;
}

// get one blog
export async function getBlog(id) {
  const docRef = doc(db, "blogs", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return "No such document!";
  }
}

// update a blog
// Add a new document in collection "blogs"
export async function updateBlog(id, heading, imgUrl, discription, data) {
  const resolved = await setDoc(doc(db, "blogs", id), {
    timestamp: serverTimestamp(),
    heading: heading,
    imgUrl: imgUrl,
    discription: discription,
    data: data,
  });
  console.log(resolved);
}

// delete a blog
export async function deleteBlog(id) {
  const deleted = await deleteDoc(doc(db, "blogs", id));
  console.log(deleted);
}

// import articles order and limit
export async function getBlogLimit(n) {
  const q = await query(
    collection(db, "blogs"),
    orderBy("timestamp"),
    limit(n)
  );

  const blogArr = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());

    const docData = doc.data();

    blogArr.push({
      id: doc.id,
      discription: docData.discription,
      imgUrl: docData.imgUrl,
      heading: docData.heading,
    });
  });

  return blogArr;
}
