import "./works.scss"

import React from 'react'

export default function Works() {
    const data =[ {

        id: "1",
        icon: "./assets/sxgreen.png",
        title: "Featured",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "./assets/sxgreen.png"
    }, 
    {
        id: "w2",
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
    return (
        <div className="works" id="works">
            <div className="slider">
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                <img src={d.img} alt="" />
                                </div>

                            <h2>{d.title}</h2>
                            <p> {d.desc}</p>
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
            <img src="assets/down.png" className="arrow left" alt=""/>
            <img src="assets/down.png" className="arrow right" alt=""/>
        </div>
    );
}
