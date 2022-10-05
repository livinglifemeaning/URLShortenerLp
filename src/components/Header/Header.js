import Heading from "./Heading/Heading";
import Hero from "./Hero/Hero";
import classes from "./Header.module.css"; 


const Header = () => {
  return (
    <div className={classes.header}>
      <Heading/>
      <Hero/>
    </div>
  )
}

export default Header
