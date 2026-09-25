import myPhoto from '../assets/intro-photo.jpg'
import hello from '../assets/hello,.svg'
import './Home.css'

const skills = [
    "UX/UI Designer",
    "Lifelong Learner",
    "Problem Solver",
    "Negotiator",
    "Project Manager",
    "Entrepeneur",
];

const skillColors = [
    "orange-40",
    "yellow-40",
    "blue-40",
    "purple-30",
    "pink-40",
    "green-40",
];

function getRandomSkillColor(){
    return skillColors[Math.floor(Math.random() * skillColors.length)];
}

function Home(){
    return(
        <main className='home-container'>
            <section className='copy-container'>
                <div className='intro'><span><img src={myPhoto} width='100'/></span><span><img src={hello} /></span><span className="intro-name body-lg"> I'm Krissa</span></div>
                <h2>A strategic designer who bridges the gap between design and engineering.</h2>
                <p>With just the right amount of gumption, I make digital experiences enjoyable.</p>
            </section>
            
            <section className='skills'>
                {skills.map((skill, index) => (
                    <div className={`skill ${skillColors[index]}`} key={skill}>
                        {skill}
                    </div>
                ))}

            </section>
        </main>
    )
}

export default Home;