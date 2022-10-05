import { useContext } from "react";
import { MediaContext } from "../../../App";
import Button from "../../UI/Button/Button"; 
import AccentDesktop from "./bg-boost-desktop.svg"; 
import AccentMobile from "./bg-boost-mobile.svg"; 
import classes from "./Banner.module.css"; 

const Banner = () => {
  const isDesktop = useContext(MediaContext); 
  return (
    <div className={classes.banner}>
      <h2 className={classes.title}>Boost your links today</h2>
      <Button color="cyan" type="circle">Get Started</Button>
      <img src={isDesktop ? AccentDesktop : AccentMobile} alt="" className={classes.accent} />
    </div>
  )
}

export default Banner
