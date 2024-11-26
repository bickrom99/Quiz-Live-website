
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdtVz0qHGnLUL8ACWDBdmtFpNH7aWHERU",
  authDomain: "quize-web.firebaseapp.com",
  projectId: "quize-web",
  storageBucket: "quize-web.firebasestorage.app",
  messagingSenderId: "890156143499",
  appId: "1:890156143499:web:33f74e72e7ddd45a7d558e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);