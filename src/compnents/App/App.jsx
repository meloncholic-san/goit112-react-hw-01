import userData from "../../userData.json"
import friends from "../../friends.json"
import transactions from "../../transactions.json"
import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import TransationHistory from "../TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />
       <FriendList friends={friends} />
      <hr />
       <TransationHistory items = {transactions} />
    </>
    
  );
}
