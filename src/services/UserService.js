import { getDatabase, ref, get } from "firebase/database";

export const fetchUserProfile = async (userId) => {
  try {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No user profile found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
