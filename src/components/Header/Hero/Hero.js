import Button from "../../UI/Button/Button";
import Illustration from "./illustration-working.svg";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.textBox}>
        <h1 className={classes.title}>More than just shorter links</h1>
        <p className={classes.paragraph}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button color="cyan" type="circle">Get Started</Button> 
      </div>
      <div className={classes.imageBox}>
        <img src={Illustration} alt="Three graphs" />
      </div>
    </div>
  );
};

export default Hero;
