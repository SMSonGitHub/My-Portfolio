import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar() {
    return (
        <div className="topbar active">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Intro</a>
                     <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span> +1 601 342 6586</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon classname="icon" />
                        <span>sabienruffin@gmail.com</span>
                    </div>
                </div>
            
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
