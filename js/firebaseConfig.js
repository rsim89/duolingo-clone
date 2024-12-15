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

export{app};