import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";

// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};

// Logout
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Logout Error:", error.message);
    throw error;
  }
};

// Check Authentication State
export const checkAuthState = (callback) => {
  return auth.onAuthStateChanged(callback); 
};
