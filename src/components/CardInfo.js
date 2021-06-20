import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from : {opacity:0}});

    return(
       <animated.div classname="s-card-info" style={style}>
           <p className="s-card-title">{props.title}</p>
           <p className="s-card-sub-title">{props.subTitle}</p>
           <a>{props.link} target="_blank" rel="noopener noreferrer"</a>
       </animated.div>
    );
}

export default CardInfo;