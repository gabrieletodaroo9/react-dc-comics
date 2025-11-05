import FacebookImg from '../assets/img/footer-facebook.png'
import PeriscopeImg from '../assets/img/footer-periscope.png'
import PinterestImg from '../assets/img/footer-pinterest.png'
import TwitterImg from '../assets/img/footer-twitter.png'
import YouTubeImg from '../assets/img/footer-youtube.png'
import FooterMenu from './FooterMenu'



export default function Footer() {

    return (
        <>
            <footer className='position-relative'>

                <FooterMenu />

                <div className='footer-social bg-dark'>
                    <div className="container text-white d-flex justify-content-between">
                        <a className='btn btn dark' href="">
                            SIGN UP NOW!
                        </a>
                        <div className='social-icons d-flex gap-2 gap-sm-3 align-items-center'>
                            <span className='follow-span d-none d-md-block'>
                                FOLLOW US
                            </span>
                            <a href="">
                                <img src={FacebookImg} alt="facebook-icon" />
                            </a>
                            <a href="">
                                <img src={PeriscopeImg} alt="periscope-icon" />
                            </a>
                            <a href="">
                                <img src={PinterestImg} alt="pinterest-icon" />
                            </a>
                            <a href="">
                                <img src={TwitterImg} alt="twitter-icon" />
                            </a>
                            <a href="">
                                <img src={YouTubeImg} alt="youtube-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}