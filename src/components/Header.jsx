import HeaderMenu from './HeaderMenu'
import Logo from './Logo'

export default function Header({ src, menuLinks }) {

    return (
        <>
            <header>
                <nav className="container d-flex justify-content-center justify-content-md-between align-items-center ">
                    <Logo src={src} />
                    <HeaderMenu links={menuLinks} />
                </nav>
            </header>
        </>
    )

}