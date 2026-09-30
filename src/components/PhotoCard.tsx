import '../styles/global.css'
import './PhotoCard.css'

type PhotoCardProps = {
    image: string;
    alt: string;
    caption: string;
    zIndex: number;
    rotation?: number;
    top?: string;
    right?: string;
    left?: string; 
}

function PhotoCard ({image, alt, caption, zIndex, rotation, top, left, right}: PhotoCardProps){
    return (
            <div 
            className='photo-card'
            style={{zIndex, top, left, right, transform: `rotate(${rotation}deg)`}}
            >
              <figure>
                <img src={image} alt={alt}/>
                <figcaption>{caption}</figcaption>
                </figure>  
            </div>
    )
}

export default PhotoCard;