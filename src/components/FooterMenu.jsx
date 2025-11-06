export default function FooterMenu({ DcComicsMenu, DcMenu, SitesMenu, BigLogo }) {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-4 col-md-2 text-white ps-4 position-relative z-1">
                    <div className='dc-comics-menu '>
                        <h3>DC COMICS</h3>
                        <ul className='list-unstyled'>
                            {
                                DcComicsMenu.map(link => (
                                    <li key={link.id}>
                                        <a href={link.link}>{link.title}</a>
                                    </li>
                                ))
                            }
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
                <div className="col-4 col-md-2 text-white ps-4 position-relative z-1">
                    <h3>DC</h3>
                    <ul className='list-unstyled'>
                        {
                            DcMenu.map(link => (
                                <li key={link.id}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="col-4 col-md-2 text-white ps-4 position-relative z-1">
                    <h3>SITES</h3>
                    <ul className='list-unstyled'>
                        {
                            SitesMenu.map(link => (
                                <li key={link.id}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            ))
                        }

                    </ul>

                </div>
                <img src={BigLogo} alt="logo-dc-big" className='position-absolute big-logo' />
            </div>
        </div>
    )

}