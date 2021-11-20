import { initializeApp } from "firebase/app" ;
import { getStorage } from 'firebase/storage'

const firebaseConfig = { 
  apiKey : "AIzaSyAs_XHlq6caxy75AIAXQb-NnGF3zbeDmeM" , 
  authDomain : "upload-image-ebfc7.firebaseapp.com" , 
  projectId : "upload-image-ebfc7" , 
  storageBucket : "upload-image-ebfc7.appspot.com" , 
  messagingSenderId : "217928964888" , 
  appId : "1: 217928964888: web: c9041e2d03c100a00edc6d" 
};

const app = initializeApp ( firebaseConfig );
export const storage = getStorage()