export default function FooterMenu({ dcComicsCol, DcMenu, SitesMenu, BigLogo }) {
    const DcComicsMenu = dcComicsCol[0]
    const shopMenu = dcComicsCol[1]
    const { title, menuLink } = DcComicsMenu
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-4 col-md-2 text-white ps-4 position-relative z-1">
                    <div className='dc-comics-menu '>
                        <h3>{title.toUpperCase()}</h3>
                        <ul className='list-unstyled'>
                            {
                                menuLink.map(link => (
                                    <li key={link.id}>
                                        <a href={link.link}>{link.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="shop-menu">
                        <h3>{shopMenu.title.toUpperCase()}</h3>
                        <ul className='list-unstyled'>
                            {
                                shopMenu.menuLink.map(link => (
                                    <li key={link.id}>
                                        <a href={link.link}>{link.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
                <div className="col-4 col-md-2 text-white ps-4 position-relative z-1">
                    <h3>{DcMenu.title.toUpperCase()}</h3>
                    <ul className='list-unstyled'>
                        {
                            DcMenu.menuLink.map(link => (
                                <li key={link.id}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="col-4 col-md-2 text-white ps-4 position-relative z-1">
                    <h3>{SitesMenu.title.toUpperCase()}</h3>
                    <ul className='list-unstyled'>
                        {
                            SitesMenu.menuLink.map(link => (
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