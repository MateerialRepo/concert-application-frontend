import Link from "next/link"

import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Concertor</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/concerts">Browse all Concerts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader