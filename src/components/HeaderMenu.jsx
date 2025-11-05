
const headerLinkItems = [
    {
        id: 1,
        title: "CHARACTER",
        link: "#",
        isActive: false
    },
    {
        id: 2,
        title: "COMICS",
        link: "#",
    },
    {
        id: 3,
        title: "MOVIES",
        link: "#",
        isActive: true
    },
    {
        id: 4,
        title: "TV",
        link: "#",
        isActive: false
    },
    {
        id: 5,
        title: "GAMES",
        link: "#",
        isActive: false
    },
    {
        id: 6,
        title: "COLLECTIBLES",
        link: "#",
        isActive: false
    },
    {
        id: 7,
        title: "VIDEOS",
        link: "#",
        isActive: false
    },
    {
        id: 8,
        title: "FANS",
        link: "#",
        isActive: false
    },
    {
        id: 9,
        title: "NEWS",
        link: "#",
        isActive: false
    },
    {
        id: 10,
        title: "SHOP",
        link: "#",
        isActive: false
    }
]

export default function HeaderMenu() {
    return (
        <>
            <ul className='list-unstyled d-flex flex-wrap gap-5'>
                {
                    headerLinkItems.map(link => (
                        <li key={link.id} className={link.isActive ? "active" : ""}>
                            <a href="">{link.title}</a>
                        </li>
                    )
                    )
                }
            </ul>
        </>
    )
}