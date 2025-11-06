export default function HeaderMenu({ links }) {
    return (
        <ul className='list-unstyled d-flex flex-wrap gap-5'>
            {
                links.map(link => (
                    <li key={link.id} className={link.isActive ? "active" : ""}>
                        <a href="">{link.title}</a>
                    </li>
                ))
            }
        </ul>
    )
}