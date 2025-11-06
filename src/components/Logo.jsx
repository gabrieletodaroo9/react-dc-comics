export default function Logo({ src }) {
    return (
        <a href='#' className='logo'>
            <img src={src} alt="logo-dc" className='w-50' />
        </a>
    )
}