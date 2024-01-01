"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const linksItem = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(true);
  console.log(open);
  const session = true;
  const isAdmin = true;

  const handleMobileMenu =()=>{
    setOpen((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav_links_item}>
        {linksItem.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.mobile_btn} onClick={handleMobileMenu}>menu</button>
      {open && (
        <div className={styles.mobileNavLinks}>
          {linksItem.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
