import "./testimonials.scss"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials </h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src ="assets/down.png" className="left" alt=""/>
                        <img src ="assets/sxgreen.png" className="user" alt=""/>
                        <img src ="assets/youtube.png" className="right" alt=""/>  
                    </div>
                    <div className="center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </div>
                    <div className="bottom">
                    <h3> S. Xavier </h3>
                    <h4> Developer </h4>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
