import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsekdAicaIIjXZZ7B5sK1KPUJP0SecEPA",
  authDomain: "ferming-54b6e.firebaseapp.com",
  projectId: "ferming-54b6e",
  storageBucket: "ferming-54b6e.appspot.com",
  messagingSenderId: "82051034172",
  appId: "1:82051034172:web:7b03be54900bebfe1ee739",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
