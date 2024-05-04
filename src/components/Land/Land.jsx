import React from 'react'
import './land.css';
import Header from '../Header/Header';
import land_image from '../../assets/hero_image.png';
import land_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';
const Land = () => {
    const transition = {type:'spring', duration: 3 };
    const mobile = window.innerWidth<=768 ? true : false;
  return (
   <div className="hero" id='land'>
    <div className="blur blur-l"></div>
     <div className="left-h">
        <Header/>
        <div className="ad">
            <motion.div
              initial={{left:mobile? "160px":"200"}}
              whileInView={{left:'8px'}}
              transition={{...transition,type:'tween'}}
            ></motion.div>
            <span>The best Fitness Club in town</span>
        </div>
        <div className="land-text">
            <div>
            <span className="stroke-text">SHAPE</span>
            <span>Your</span>
            </div>
            <div>
            <span>Ideal Body</span>
            </div>
            <div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis beatae voluptate, deserunt mollitia sint labore placeat</span>

            </div>
           
        </div>
        <div className="figures">
            <div>
                <span>
                <NumberCounter end={150} start={90} delay='4' preFix="+"/>
                </span>
               
                <span>expert coaches</span>
            </div>
            <div>
                <span>
                <NumberCounter end={250} start={140} delay='4' preFix='+'/>
                </span>
            
                
                <span>members joined</span>
            </div>
            <div>
                <span>
                <NumberCounter end={900} start={700} delay='4' preFix='+'/>
                </span>
            
                
                <span>programs</span>
            </div>

        </div>
        <div className="land-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>

        </div>
     </div>
     <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
        transition={transition}
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
         className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>120bpm</span>
        </motion.div>
        <img src={land_image} alt="land_image" className="land_image" />
        <motion.img
         transition={transition}
         initial={{right:'11rem'}}
         whileInView={{right:'20rem'}}
         src={land_image_back} alt="land_image_back" className="land_image_back" />

        <motion.div
          transition={transition}
          initial={{right:'7rem'}}
          whileInView={{right:'1rem'}}
         className="calories">
            <img src={Calories} alt="calories" />
            <div>
                   <span>Calories Burned</span>
                   <span>200 kcal</span>
            </div>
        </motion.div>
     </div>
   </div>
  )
}

export default Land