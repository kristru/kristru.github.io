import '../styles/global.css'
import '../components/Header.css'
import './About.css'
import '../components/PhotoCard'
import PhotoCard from '../components/PhotoCard'
import img1 from '../assets/about-imgs/image.jpg'
import img2 from '../assets/about-imgs/image-1.jpg'
import img3 from '../assets/about-imgs/image-2.jpg'
import img4 from '../assets/about-imgs/image-3.jpg'
import img5 from '../assets/about-imgs/image-4.jpg'
import img6 from '../assets/about-imgs/image-5.jpg'
import img7 from '../assets/about-imgs/image-6.jpg'

const photos = [
    {image:img4, alt: 'work life balance', caption: 'Balancing work and life like a boss', rotation:-9.46, zIndex: 2, top:'20%', left:'5%', right:'' },
    {image:img7, alt: 'playing golf', caption: 'I love to play golf', rotation:0, zIndex: 4, top:'43.5%', left:'30%', right:'' },
    {image:img3, alt: 'track & field', caption: 'Received scholarships for Cross Country, Track & Field, Basketball, Art and Academics', rotation:0, zIndex: 0, top:'7%', left:'20%', right:'' },
    {image:img1, alt: 'favorite hobby', caption: 'One of my favorite hobbies is scrapbooking', rotation:3, zIndex: 3, top:'2%', left:'', right:'' },
    {image:img5, alt: 'plants', caption: `I'm deeply enamored with plants and flowers`, rotation:0, zIndex: 2, top:'37%', left:'', right:'27%' },
    {image:img2, alt: 'motherhood', caption: `I'm a wife and mother to two`, rotation:14, zIndex: 1, top:'10%', left:'', right:'15%' },
    {image:img6, alt: 'selfie', caption: 'Started my own business to take care of kids and supplement income', rotation:8, zIndex: 0, top:'40%', left:'',right:'3%' },
    
]

function About (){
    return (
        <main className='about-container dot-grid'>
            <section className='intro-copy'>
                <h2 className='caps'>Who I am</h2>
                <p className='display-lg'>Behind the scenes</p>
            </section>
            
            <section className='collage'>
                {photos.map((photo) => (
                    <PhotoCard 
                        image={photo.image}
                        alt={photo.alt}
                        caption={photo.caption}
                        rotation={photo.rotation}
                        zIndex={photo.zIndex}
                        top={photo.top}
                        left={photo.left}
                        right={photo.right}
                    />
                ))}
            </section>
        </main>
    )
}

export default About;