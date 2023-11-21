import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // import the getAuth function
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBTVhQXZE_vcwc__AFFPWjS37YH-T23QIs",
authDomain: "cprg306-assignments-f90d3.firebaseapp.com",
projectId: "cprg306-assignments-f90d3",
storageBucket: "cprg306-assignments-f90d3.appspot.com",
messagingSenderId: "982676379267",
appId: "1:982676379267:web:41bad8a2f0078b79f7adb6",
measurementId: "G-9NY0Q9WN37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // initialize the Firebase Authentication service

export { auth }; // export the auth object so you can use it in other files
export const db = getFirestore(app);

