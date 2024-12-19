import { Route, Routes } from "react-router-dom"
import VibesnapApp from "./components/Login/VibesnapApp"
import Profile from "./components/Profile/Profile"
import NewPost from "./components/CreatePost/NewPost"
import SharePost from "./components/SharePost/SharePost"
import { useEffect, useState } from "react"
import { checkAuthState } from "./services/Auth"
import { fetchUserProfile } from "./services/UserService"
import Feed from "./components/Feed/Feed"


function App() {
  const [user, setUser] = useState(null);

  //Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = checkAuthState(async (authUser) => {
      if(authUser){
        const profileData = await fetchUserProfile(authUser.uid);
        setUser({
          uid: authUser.uid,
          name: profileData?.name ? profileData?.name : authUser?.displayName,
          bio: profileData?.bio ? profileData?.bio : "Just someone who loves designing, sketching, and finding beauty in the little things 💕",
          photoURL: profileData?.photoURL ? profileData?.photoURL : authUser.photoURL,
          coverImage: profileData?.coverImage ? profileData?.coverImage : "https://cdn.builder.io/api/v1/image/assets/c27c0052c4c448a4b5a797d37767e8ca/93cc626197dce26513fcf0144173648a7eaf5bc92ed23cd2b8e9776b756a037d?apiKey=c27c0052c4c448a4b5a797d37767e8ca&"
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
      <>
      <Routes>
      <Route exact path="/" Component={VibesnapApp}/>
      <Route 
      path="/profile" 
      element={
        user && (<Profile user={user} />)
      }
      />
      <Route path="/createpost" element={user && <NewPost userId={user.uid}/>}/>
      <Route path="/sharepost" Component={SharePost}/>
      <Route path="/feed" element={user && <Feed user={user}/>}/>
      </Routes>
      </>
  )
}

export default App
