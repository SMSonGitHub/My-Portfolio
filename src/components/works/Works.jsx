import "./works.scss"
import { data } from "../../WorksData.jsx"
import { useState } from "react";


import React from 'react'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(
    (mySlide) => mySlide > 0 ? mySlide-1 : data.length-1 ) :
    setCurrentSlide(
        (prevSlide)=> prevSlide < data.length-1 
        ? prevSlide+1 : 0
    )
   
}


    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map( (d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                <img src={d.icon} alt="" />
                                </div>
                            <h2>{d.title}</h2>
                            <p> {d.desc}
                            </p>
                                <span>Projects</span>
                            </div>

                        </div>
                        <div className="right">
                            <img src={d.img} alt="Coming Soon"/>
                            
                        </div>
                    </div>
                   
                </div>
                 ))} 
                </div>
            <img src="assets/down.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/down.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    );
}
