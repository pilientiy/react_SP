import Profile from "../Profile/Profile"
import userData from "../../../userData.json"
import css from "../App/App.module.css"
import FriendList from "../FriendList/FriendList";
import friends from "../../../friends.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../../../transactions.json"


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

     <FriendList friends={friends}/>

     <TransactionHistory items={transactions}/>
   </div>
   );
  }
  