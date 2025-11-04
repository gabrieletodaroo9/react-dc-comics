import LogoDc from '../assets/img/dc-logo.png'

export default function Header() {

    return (
        <>
            <header>
                <nav className="container d-flex justify-content-between align-items-center ">
                    <div>
                        <img src={LogoDc} alt="logo-dc" className='w-50' />
                    </div>
                    <ul className='list-unstyled d-flex gap-5'>
                        <li className=''>
                            <a href="">CHARACTERS</a>
                        </li>
                        <li className='active'>
                            <a href="">COMICS</a>
                        </li>
                        <li className=''>
                            <a href="">MOVIES</a>
                        </li>
                        <li className=''>
                            <a href="">TV</a>
                        </li>
                        <li className=''>
                            <a href="">GAMES</a>
                        </li>
                        <li className=''>
                            <a href="">COLLECTIBLES</a>
                        </li>
                        <li className=''>
                            <a href="">VIDEOS</a>
                        </li>
                        <li className=''>
                            <a href="">FANS</a>
                        </li>
                        <li className=''>
                            <a href="">NEWS</a>
                        </li>
                        <li className=''>
                            <a href="">SHOP</a>
                        </li>
                    </ul>
                </nav>
            </header>


        </>
    )

}