import LogoDc from '../assets/img/dc-logo.png'
import HeaderMenu from './HeaderMenu'

export default function Header() {

    return (
        <>
            <header>
                <nav className="container d-flex justify-content-center justify-content-md-between align-items-center ">
                    <a href='#' className='logo'>
                        <img src={LogoDc} alt="logo-dc" className='w-50' />
                    </a>
                    <HeaderMenu />
                </nav>
            </header>


        </>
    )

}