import LogoDc from '../assets/img/dc-logo.png'
import HeaderMenu from './HeaderMenu'

export default function Header() {

    return (
        <>
            <header>
                <nav className="container d-flex justify-content-center justify-content-md-between align-items-center ">
                    <div className='logo'>
                        <img src={LogoDc} alt="logo-dc" className='w-50' />
                    </div>
                    <HeaderMenu />
                </nav>
            </header>


        </>
    )

}