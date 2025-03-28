import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBTxOPWTrCMCNONtbUW-hSplj7tvlLMzRE",
  authDomain: "hyresync.firebaseapp.com",
  projectId: "hyresync",
  storageBucket: "hyresync.firebasestorage.app",
  messagingSenderId: "748996752150",
  appId: "1:748996752150:web:e4a3e08f5a6394049fd637",
  measurementId: "G-XNZY3QM89E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and Auth
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export const auth = getAuth(app);

export default app;