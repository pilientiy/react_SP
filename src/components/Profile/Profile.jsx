import css from "../Profile/Profile.module.css"

export default function Profile({username, tag, location, avatar, stats: {followers, views, likes},}) {
    return (
<div className={css.cotainer}>
  <div className={css.box}>
    <img className={css.img}
      src={avatar}
      alt={username}
    />
    <p className={css.title}>{username}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li className={css.item}>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li className={css.item}>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
    )
    
};
