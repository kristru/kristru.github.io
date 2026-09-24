import reactLogo from '../assets/react.svg'

function Home(){
    return(
        <main className='home-container'>
            <div className='intro'><span><img src={reactLogo} /></span><span>Hello,</span><span>I'm Krissa</span></div>
            <p>A strategic designer who bridges the gap between design and engineering.</p>
            <p>with just the right amount of gumption, I make digital experiences enjoyable.</p>
            
            <section>
                <div>UX/UI Designer</div>
                <div>Lifelong Learner</div>
                <div>Problem Solver</div>
                <div>Negotiator</div>
                <div>Project Manager</div>
                <div>Entrepreneur</div>
            </section>
        </main>
    )
}

export default Home;