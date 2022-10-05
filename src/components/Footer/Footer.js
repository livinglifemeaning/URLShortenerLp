import FooterNav from "./FooterNav/FooterNav"; 
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar"; 
import Logo from "./footer-logo.svg"; 
import classes from "./Footer.module.css"; 
const Footer = () => {
  return (
    <div className={classes.footer}>
     <img src={Logo} alt="Shortly logo" className={classes.logo} />
     <FooterNav/>
     <SocialMediaBar/>
    </div>
  );
};

export default Footer;
