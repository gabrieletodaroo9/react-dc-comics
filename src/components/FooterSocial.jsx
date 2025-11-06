export default function FooterSocial({ socialImgs }) {
    return (
        <div className='footer-social bg-dark'>
            <div className="container text-white d-flex justify-content-between">
                <a className='btn btn dark' href="">
                    SIGN UP NOW!
                </a>
                <div className='social-icons d-flex gap-2 gap-sm-3 align-items-center'>
                    <span className='follow-span d-none d-md-block'>
                        FOLLOW US
                    </span>
                    {
                        socialImgs.map(socialImg => (
                            <a href="">
                                <img src={socialImg} alt="" />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}