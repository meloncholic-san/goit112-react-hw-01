import Logo from "../Logo";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />
        <UserMenu />
      </div>
    </header>
  );
}
