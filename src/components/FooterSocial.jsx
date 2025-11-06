export default function FooterSocial({ socialSection }) {
    const { socialText, btnText, socialImg } = socialSection

    return (
        <div className='footer-social bg-dark'>
            <div className="container text-white d-flex justify-content-between">
                <a className='btn btn dark' href="">
                    {btnText.toUpperCase()}
                </a>
                <div className='social-icons d-flex gap-2 gap-sm-3 align-items-center'>
                    <span className='follow-span d-none d-md-block'>
                        {socialText.toUpperCase()}
                    </span>
                    {
                        socialImg.map(socialImg => (
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