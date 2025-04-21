import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem ({friend: {avatar, name, isOnline}}) 
{
    const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);
    return (
        <div className={css.item}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}