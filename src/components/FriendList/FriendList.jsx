import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList({friends}) {
    return (
        <ul className={css.container}>
            {friends.map((friend) => (
                    <li className={css.item} key={friend.id}>
                        <FriendListItem friends={friend}   
                        />
                    </li>
                )
            )}  
</ul>
    )
}