import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCAeUHdyrxoI0AnHLr7OcS4O62BmI34rDA",
  authDomain: "news-app-e6af7.firebaseapp.com",
  projectId: "news-app-e6af7",
  storageBucket: "news-app-e6af7.appspot.com",
  messagingSenderId: "304920514156",
  appId: "1:304920514156:web:bf72ec391d7158a2f09249"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)