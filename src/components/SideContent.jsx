export default function SideContent({ sideContentLink }) {
    return (
        <div className="side-content z-1 position-relative">
            <div className="container">
                <div className='row text-white text-center'>
                    {
                        sideContentLink.map(item => (

                            <div key={item.id} className='col-lg d-flex align-items-center justify-content-center scale'>
                                <img src={item.imgUrl} alt="" className='main-icon py-5 pe-3' />
                                <a className='text-white text-decoration-none' href={item.link}>{item.title.toUpperCase()}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}