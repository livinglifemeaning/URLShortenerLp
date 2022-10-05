import { useContext, useRef, useState } from "react";
import { MediaContext } from "../../../App";
import {useDispatch} from "react-redux"; 
import { linkActions } from "../../../store";

import Button from "../../UI/Button/Button";
import AccentDesktop from "./bg-shorten-desktop.svg";
import AccentMobile from "./bg-shorten-mobile.svg";
import classes from "./LinkShortener.module.css";

const LinkShortener = () => {
  const isDesktop = useContext(MediaContext);
  const [inputInvalid, setInputInvalid] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch(); 
  

  const fetchShortenedLink = async () => {
    const originalLink = inputRef.current.value;

    if (originalLink === "") {
      setInputInvalid(true);
    } else {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${originalLink}`
      );
      if (!response.ok) {
        setInputInvalid(true);
        const message = `'An error has occured: ${response.status}`;
        throw new Error(message);
      } else {
        setInputInvalid(false);
        const object = await response.json();
        const shortenedLink = await object.result.full_short_link;
        dispatch(linkActions.updateLinksArray({
          originalLink, 
          shortenedLink
        }))
      }
    }
  };

  return (
    <div className={classes.box}>
      <div className={classes.inputBox}>
        <input
          ref={inputRef}
          type="text"
          className={`${classes.input} ${inputInvalid && classes.invalid}`}
          placeholder="Shorten a link here..."
        />
        {inputInvalid && (
          <p className={classes.invalidMsg}>Please add a valid link</p>
        )}
      </div>
      <Button onClick={fetchShortenedLink} color="cyan" type="square">
        Shorten It!
      </Button>
      <img
        src={isDesktop ? AccentDesktop : AccentMobile}
        alt=""
        className={classes.accent}
      />
    </div>
  );
};

export default LinkShortener;
