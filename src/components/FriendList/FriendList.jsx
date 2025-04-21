import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem"

export default function FriendList({friends}) {
    return (
        < ul className={css.list}>
        {friends.map((friend) => {
        return (
            <li key={friend.id} className={css.item}>
            <FriendListItem friend={friend} />
            </li>
        );
        })}

        </ul>
    )
}