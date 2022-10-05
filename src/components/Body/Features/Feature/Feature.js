import Brand from "./icon-brand-recognition.svg";
import Detailed from "./icon-detailed-records.svg";
import Customizable from "./icon-fully-customizable.svg";
import classes from "./Feature.module.css";

const IMAGES = [Brand, Detailed, Customizable];
const Feature = ({ index, title, paragraph }) => {
  return (
    <div className={classes.feature}>
        <div className={classes.imageBox}>
      <img src={IMAGES[index]} alt="" className={classes.image} />
      </div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Feature;
