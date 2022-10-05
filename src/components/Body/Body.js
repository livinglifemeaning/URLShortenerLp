import { useSelector } from "react-redux";
import LinkShortener from "./LinkShortener/LinkShortener"; 
import Links from "./Links/Links"; 
import Features from "./Features/Features"; 
import classes from "./Body.module.css"; 
import Banner from "./Banner/Banner";

const Body = () => {
  const linksArray = useSelector(state => state.links.linksArray)


  return (
    <div className={classes.body}>
      <div className={classes.paddedBox}>
      <LinkShortener/>
      {linksArray.length > 0 && <Links/>} 
      <Features/>
      </div>
      <Banner/>
    </div>
  )
}

export default Body
