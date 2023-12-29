import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
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


  return (
    <div className={ styles.nav_links_item }>
      { linksItem.map((link) => (
        <NavLink item={ link } key={ link.title } />
      )) }
    </div>
  );
};

export default Links;
