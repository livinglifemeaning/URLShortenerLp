import classes from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <div className={classes.navBox}>
      
      <div className={classes.section}>
        <p className={classes.title}>Features</p>
        <ul className={classes.nav}>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>

      <div className={classes.section}>
        <p className={classes.title}>Resources</p>
        <ul className={classes.nav}>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>

      <div className={classes.section}>
        <p className={classes.title}>Company</p>
        <ul className={classes.nav}>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      
    </div>
  );
};

export default FooterNav;
