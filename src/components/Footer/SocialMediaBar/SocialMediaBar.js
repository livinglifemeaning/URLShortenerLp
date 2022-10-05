import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import Pinterest from "./Icons/Pinterest";
import Twitter from "./Icons/Twitter";
import classes from "./SocialMediaBar.module.css"; 

const SocialMediaBar = () => {
  let color = "#FFF"; 
  let hoverColor = "#2acfcf"; 
  return (
    <div className={classes.bar}>
      <Facebook color={color} hoverColor={hoverColor}/>
      <Twitter color={color} hoverColor={hoverColor}/>
      <Pinterest color={color} hoverColor={hoverColor}/>
      <Instagram color={color} hoverColor={hoverColor}/>
    </div>
  )
}

export default SocialMediaBar
