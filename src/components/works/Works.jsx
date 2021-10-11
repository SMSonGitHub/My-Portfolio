import "./works.scss"

import React from 'react'

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                <img src="assets/mobile.png" alt="" />
                                </div>

                            <h2>Title</h2>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Molestiae, reprehenderit porro! Dolore, ullam deserunt!</p>
                                <span>Projects</span>
                            </div>

                        </div>
                        <div className="right">
                            <img src="assets/sxgreen.png" alt="Coming Soon">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/down.png" className="arrow left" alt=""/>
            <img src="assets/down.png" classname="arrow right" alt=""/>
        </div>
    );
}
