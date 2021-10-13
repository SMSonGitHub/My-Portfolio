import "./works.scss"
import { useState } from "react";

import React from 'react'

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [{

        id: "1",
        icon: "./assets/sxgreen.png",
        title: "Featured",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/sxgreen.png"
    }, 
    {
        id: "2",
        icon: "./assets/sxyellow.png",
        title: "Web App",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/sxyellow.png"
    }, 
    {
        id: "3",
        icon: "./assets/sxgreen.png",
        title: "Mobile App",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/sxgreen.png"
    }, 
    {
        id: "4",
        icon: "./assets/sxyellow.png",
        title: "Design",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/sxyellow.png"
    }, 
    {
        id: "5",
        icon: "./assets/sxgreen.png",
        title: "Content",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/sxgreen.png"
    }, 
    {
        id: "6",
        icon: "./assets/sxyellow.png",
        title: "Contact",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/sxyellow.png"
    }, 
];

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
                            <img src="assets/sxgreen.png" alt="Coming Soon"/>
                            
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
