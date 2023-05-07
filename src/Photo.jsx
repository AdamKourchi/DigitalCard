import man from './assets/man.jpg' 
import icon from './assets/Icon.png' 


export default function Photo(){
    return(
        <div className='photo'>
        <img className='profile-img' src={man} />
        <h1>Adam Kourchi</h1>
        <h2>Frontend Developer</h2>
        <h3>adamK.website</h3>
        <button> <img src={icon} /> Email</button>
        </div>
    )
}