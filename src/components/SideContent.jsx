import DigitalIcon from '../assets/img/buy-comics-digital-comics.png'
import MerchandiseIcon from '../assets/img/buy-comics-merchandise.png'
import ShopLocatorIcon from '../assets/img/buy-comics-shop-locator.png'
import SubscriptionsIcon from '../assets/img/buy-comics-subscriptions.png'
import VisaIcon from '../assets/img/buy-dc-power-visa.svg'

export default function SideContent() {

    return (
        <>
            <div className="side-content">
                <div className="container">
                    <div className='row text-white text-center'>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <img src={DigitalIcon} alt="digitalIcon" className='main-icon py-5 pe-3' />
                            <a>DIGITAL COMICS</a>
                        </div>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <img src={MerchandiseIcon} alt="digitalIcon" className='main-icon py-5 pe-3' />
                            <a>DC MERCHANDISE</a>
                        </div>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <img src={ShopLocatorIcon} alt="digitalIcon" className='main-icon py-5 pe-3' />
                            <a>SUBSCRIPTION</a>
                        </div>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <img src={SubscriptionsIcon} alt="digitalIcon" className='main-icon py-5 pe-3' />
                            <a>COMIC SHOP LOCATOR</a>
                        </div>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <img src={VisaIcon} alt="digitalIcon" className='main-icon py-5 pe-3' />
                            <a>DC POWER VISA</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}