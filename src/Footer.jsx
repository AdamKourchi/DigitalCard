import twitter from './assets/TwitterIcon.png'
import facebook from './assets/FacebookIcon.png'
import insta from './assets/InstagramIcon.png'
import link from './assets/LinkedinIcon.png'
import github from './assets/GitHubIcon.png'





export default function Footer(){
    return(
        <div className="footer" >
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={link} alt="" />
            <img src={github} alt="" />
        </div>
    )
}