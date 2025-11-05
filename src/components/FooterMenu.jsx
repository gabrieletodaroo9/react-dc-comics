const DcComicsMenu = [
    {
        id: 1,
        title: "Character",
        link: "#"
    },
    {
        id: 2,
        title: "Comics",
        link: "#"
    },
    {
        id: 3,
        title: "Movies",
        link: "#"
    },
    {
        id: 4,
        title: "TV",
        link: "#"
    },
    {
        id: 5,
        title: "Games",
        link: "#"
    },
    {
        id: 6,
        title: "Video",
        link: "#"
    },
    {
        id: 7,
        title: "News",
        link: "#"
    }
]

const DcMenu = [
    {
        id: 1,
        title: "Terms Of Use",
        link: "#"
    },
    {
        id: 2,
        title: "Privacy",
        link: "#"
    },
    {
        id: 3,
        title: "Policy(new)",
        link: "#"
    },
    {
        id: 4,
        title: "Ad Choices",
        link: "#"
    },
    {
        id: 5,
        title: "Advertising",
        link: "#"
    },
    {
        id: 6,
        title: "Jobs",
        link: "#"
    },
    {
        id: 7,
        title: "Subscriptions",
        link: "#"
    },
    {
        id: 8,
        title: "Talent",
        link: "#"
    },
    {
        id: 9,
        title: "Workshops",
        link: "#"
    },
    {
        id: 10,
        title: "CPSC",
        link: "#"
    },
    {
        id: 11,
        title: "Certificates",
        link: "#"
    },
    {
        id: 12,
        title: "Ratings",
        link: "#"
    },
    {
        id: 13,
        title: "Shop Help",
        link: "#"
    },
    {
        id: 14,
        title: "Contact Us",
        link: "#"
    }
]

const SitesMenu = [
    {
        id: 1,
        title: "DC",
        link: "#"
    },
    {
        id: 2,
        title: "MAD Magazine",
        link: "#"
    },
    {
        id: 3,
        title: "DC Kids",
        link: "#"
    },
    {
        id: 4,
        title: "DC Universe",
        link: "#"
    },
    {
        id: 5,
        title: "DC Power Visa",
        link: "#"
    }
]
import BigLogo from '../assets/img/dc-logo-bg.png'

export default function FooterMenu() {
    return (
        <>
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
        </>
    )

}