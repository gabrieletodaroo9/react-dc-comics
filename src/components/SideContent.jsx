import DigitalIcon from '../assets/img/buy-comics-digital-comics.png'
import MerchandiseIcon from '../assets/img/buy-comics-merchandise.png'
import ShopLocatorIcon from '../assets/img/buy-comics-shop-locator.png'
import SubscriptionsIcon from '../assets/img/buy-comics-subscriptions.png'
import VisaIcon from '../assets/img/buy-dc-power-visa.svg'

const SideContentLink = [
    {
        id: 1,
        title: "digital comics",
        link: "#",
        imgUrl: DigitalIcon,
    },
    {
        id: 2,
        title: "dc merchandise",
        link: "#",
        imgUrl: MerchandiseIcon,
    },
    {
        id: 3,
        title: "subscription",
        link: "#",
        imgUrl: ShopLocatorIcon,
    },
    {
        id: 4,
        title: "comic shop locator",
        link: "#",
        imgUrl: SubscriptionsIcon,
    },
    {
        id: 5,
        title: "dc power visa",
        link: "#",
        imgUrl: VisaIcon,
    },
]

export default function SideContent() {

    return (
        <>
            <div className="side-content">
                <div className="container">
                    <div className='row text-white text-center'>

                        {
                            SideContentLink.map(item => (

                                <div className='col-lg d-flex align-items-center justify-content-center'>
                                    <img src={item.imgUrl} alt="" className='main-icon py-5 pe-3' />
                                    <a className='text-white text-decoration-none' href={item.link}>{item.title.toUpperCase()}</a>
                                </div>
                            ))

                        }

                    </div>
                </div>
            </div>
        </>
    )
}