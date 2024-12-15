import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEY7KKs22gnl6Ue-2yYDYlLro2rJOklxU",
  authDomain: "rok-duolingo.firebaseapp.com",
  projectId: "rok-duolingo",
  storageBucket: "rok-duolingo.firebasestorage.app",
  messagingSenderId: "986353966714",
  appId: "1:986353966714:web:15130ee9f577afc2dd25c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const leaderboardContainer = document.getElementById('leaderboard-container');
// const leaderboardRef = db.collection('UsersAuthList');
const querySnapshot = await getDocs(collection(db, "UsersAuthList"));
let arrayForProfiles=[];
querySnapshot.forEach((doc) => {
    const data = doc.data();
    // console.log(data);
    // console.log(data.name);
    arrayForProfiles.push(data);
});
export default arrayForProfiles;
