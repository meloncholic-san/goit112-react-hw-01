import css from "./Profile.module.css";

export default function Profile({ username, tag, location, image, stats: { followers, views, likes } }) {
    return (
      <div className={css.cover}>
        <div className={css.imgCover}>
          <img className={css.img} src={image} alt="User avatar" />
          <p className={css.username}> {username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers</span>
            <span className={css.itemValue} >{followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span className={css.itemValue} >{views}</span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span className={css.itemValue} >{likes}</span>
          </li>
        </ul>
      </div>
    );
  }
  