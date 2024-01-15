import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD2jSru0cY-e9HQcLReL5J6T42DbGJet7c",
    authDomain: "vue-blog-22479.firebaseapp.com",
    projectId: "vue-blog-22479",
    storageBucket: "vue-blog-22479.appspot.com",
    messagingSenderId: "585360732847",
    appId: "1:585360732847:web:3602bd7a4d834781be1a5a"
  };

  firebase.initializeApp(firebaseConfig)

  let db=firebase.firestore();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp

  export {db,timestamp};
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyD2jSru0cY-e9HQcLReL5J6T42DbGJet7c",
//     authDomain: "vue-blog-22479.firebaseapp.com",
//     projectId: "vue-blog-22479",
//     storageBucket: "vue-blog-22479.appspot.com",
//     messagingSenderId: "585360732847",
//     appId: "1:585360732847:web:3602bd7a4d834781be1a5a"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
