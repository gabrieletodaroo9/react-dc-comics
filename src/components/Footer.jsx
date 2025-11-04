import FacebookImg from '../assets/img/footer-facebook.png'
import PeriscopeImg from '../assets/img/footer-periscope.png'
import PinterestImg from '../assets/img/footer-pinterest.png'
import TwitterImg from '../assets/img/footer-twitter.png'
import YouTubeImg from '../assets/img/footer-youtube.png'
import BigLogo from '../assets/img/dc-logo-bg.png'


export default function Footer() {

    return (
        <>
            <footer className='position-relative'>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-2 text-white">
                            <div className='dc-comics-menu '>
                                <h3>DC COMICS</h3>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href="">Character</a>
                                    </li>
                                    <li>
                                        <a href="">Comics</a>
                                    </li>
                                    <li>
                                        <a href="">Movies</a>
                                    </li>
                                    <li>
                                        <a href="">TV</a>
                                    </li>
                                    <li>
                                        <a href="">Games</a>
                                    </li>
                                    <li>
                                        <a href="">Videos</a>
                                    </li>
                                    <li>
                                        <a href="">News</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="shop-menu">
                                <h3>SHOP</h3>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href="">SHOP DC</a>
                                    </li>
                                    <li>
                                        <a href="">SHOP DC COLLECTIBLES</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-2 text-white">
                            <h3>DC</h3>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href="">Terms Of Use</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy(new)</a>
                                </li>
                                <li>
                                    <a href="">Ad Choices</a>
                                </li>
                                <li>
                                    <a href="">Advertising</a>
                                </li>
                                <li>
                                    <a href="">Jobs</a>
                                </li>
                                <li>
                                    <a href="">Substriptions</a>
                                </li>
                                <li>
                                    <a href="">Talent Workshops</a>
                                </li>
                                <li>
                                    <a href="">CPSC Certificates</a>
                                </li>
                                <li>
                                    <a href="">Ratings</a>
                                </li>
                                <li>
                                    <a href="">Shop Help</a>
                                </li>
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 text-white">
                            <h3>SITES</h3>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href="">DC</a>
                                </li>
                                <li>
                                    <a href="">MAD Magazine</a>
                                </li>
                                <li>
                                    <a href="">DC Kids</a>
                                </li>
                                <li>
                                    <a href="">DC Universe</a>
                                </li>
                                <li>
                                    <a href="">DC Power Visa</a>
                                </li>


                            </ul>

                        </div>
                        <img src={BigLogo} alt="logo-dc-big" className='position-absolute big-logo' />
                    </div>
                </div>
                <div className='footer-social bg-dark'>
                    <div className="container text-white d-flex justify-content-between">
                        <a className='btn btn dark' href="">
                            SIGN UP NOW!
                        </a>
                        <div className='social-icons d-flex gap-3 align-items-center'>
                            <span className='follow-span'>
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