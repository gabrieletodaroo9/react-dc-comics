import FooterMenu from './FooterMenu'
import FooterSocial from './FooterSocial'

export default function Footer({ socialSection, FooterMenuData, BigLogo }) {
    const { dcComicsCol, DcMenu, SitesMenu } = FooterMenuData;

    return (
        <footer className='position-relative'>
            <FooterMenu BigLogo={BigLogo} dcComicsCol={dcComicsCol} DcMenu={DcMenu} SitesMenu={SitesMenu} />
            <FooterSocial socialSection={socialSection} />
        </footer>
    )
}