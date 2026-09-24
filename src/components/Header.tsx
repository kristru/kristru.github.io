import reactLogo from '../assets/react.svg'

function Header(){
    return(
        <header>
            <nav>
                <div>
                    <img className="button-icon" src={reactLogo} alt="placeholder" />
                </div>
                <div>
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#resume">Resume</a>
                </div>
                <div>
                    <img className="button-icon" src={reactLogo} alt="placeholder" />
                </div>
            </nav>
        </header>
    )
}

export default Header;