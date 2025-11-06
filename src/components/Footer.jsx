import FooterMenu from './FooterMenu'
import FooterSocial from './FooterSocial'

export default function Footer({ socialImgs, FooterMenuData, BigLogo }) {
    const { DcComicsMenu, DcMenu, SitesMenu } = FooterMenuData;

    return (
        <footer className='position-relative'>
            <FooterMenu BigLogo={BigLogo} DcComicsMenu={DcComicsMenu} DcMenu={DcMenu} SitesMenu={SitesMenu} />
            <FooterSocial socialImgs={socialImgs} />
        </footer>
    )
}