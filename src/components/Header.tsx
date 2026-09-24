import '../styles/global.css'
import './Header.css'
import myLogo from '../assets/kt-logo.svg'

function Header(){
    return(
        <header>
            <nav className="header">
                <div>
                    <img src={myLogo} alt="personal logo" width="30"/>
                </div>
                <div className="main-nav p-full-sm">
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#resume">Resume</a>
                </div>
                <div>
                    <span className="material-symbols-outlined">mail</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;