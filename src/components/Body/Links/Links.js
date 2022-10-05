import { useContext, useRef, useState } from "react";
import { MediaContext } from "../../../App";
import { useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import classes from "./Links.module.css";

const Links = () => {
  const isDesktop = useContext(MediaContext);
  const linksArray = useSelector((state) => state.links.linksArray);
  const linksRef = useRef([]);
  const [copiedLinkIndex, setCopiedLinkIndex] = useState(); 
  const copyLink = (index) => {
    setCopiedLinkIndex(index); 
    const link = linksRef.current[index].innerText;
    navigator.clipboard.writeText(link);
  };

  

  return (
    <div className={classes.links}>
      {linksArray.map((obj, index) => (
        <div className={classes.link} key={index}>
          <p className={classes.orgLink}>{obj.originalLink}</p>
          {!isDesktop && <div className={classes.separator} />}
          <p
            ref={(el) => (linksRef.current[index] = el)}
            className={classes.newLink}
          >
            {obj.shortenedLink}
          </p>
          <Button onClick={() => copyLink(index)} color={copiedLinkIndex === index ? 
          "dark" : "cyan"} type="square">
            {copiedLinkIndex === index ? "Copied!" : "Copy"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Links;
