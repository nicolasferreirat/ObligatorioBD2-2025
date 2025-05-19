import React, { useState } from "react";
import classes from '../Styles/Card.module.css';
import classes2 from '../Styles/CardWhite.module.css';

const Card = ({ mode, photocandidate, namecandidate, onClick,}) => {
  const [liked, setLiked] = useState(false);

  const HeartClick = () => {
    setLiked(!liked);
  };

  const currentClasses = mode.includes('dark') ? classes : classes2;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };



  return (
    <div className={currentClasses.CardDiv} onClick={onClick}>
      <div className={classes.DivImg} style={{ backgroundImage: `url(${photocandidate})` }}>
      </div>
      
      <div className={classes.CardDiv2}>
        <div className={classes.PrimerDiv}>
          <h6 className={currentClasses.namecandidate}>{truncateText(namecandidate, 40)}</h6>
          <button>VOTAR</button>
        </div>

       
      </div>

     

      
    </div>
  );
};

export default Card;