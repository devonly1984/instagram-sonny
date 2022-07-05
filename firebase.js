import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyC1TwAGj7rPwlSGPu2pxImoSluvrSZ5szA",
	authDomain: "insta-clone-yt-12659.firebaseapp.com",
	projectId: "insta-clone-yt-12659",
	storageBucket: "insta-clone-yt-12659.appspot.com",
	messagingSenderId: "315183702204",
	appId: "1:315183702204:web:090647a2e00195de31f0b9",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
