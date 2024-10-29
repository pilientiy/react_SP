import Profile from "../Profile/Profile"
import userData from "../../../userData.json"
import css from "../App/App.module.css"

  export default function App() {
   return (
   <div className={css.container}>
    <Profile
    username={userData.username}
    tag={userData.tag}
    location={userData.location}
    avatar={userData.avatar}
    stats={userData.stats}
     />
   </div>
   );
  }
  