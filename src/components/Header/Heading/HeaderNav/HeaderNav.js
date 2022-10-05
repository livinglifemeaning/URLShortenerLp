import { useContext } from "react";
import { MediaContext } from "../../../../App";
import Button from "../../../UI/Button/Button"; 
import classes from "./HeaderNav.module.css"; 

const HeaderNav = () => {
  const isDesktop = useContext(MediaContext);
  return (
    <div className={`${classes.navBox} ${isDesktop ? classes.desktop : classes.mobile}`}>
      <div className={classes.innerBox}>
    <ul className={classes.nav}>
      <li>Features</li>
      <li>Pricing</li>
      <li>Resources</li>
    </ul>
    {!isDesktop && <div className={classes.separator}/>}
    <div className={classes.buttonsBox}>
        <p className={classes.login}>Login</p>
        <Button color={"cyan"} type={"circle"}>Sign Up</Button>
      </div>
      </div>
    </div>
  )
}

export default HeaderNav
