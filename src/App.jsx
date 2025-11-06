import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import LogoDc from './assets/img/dc-logo.png'


export default function App() {

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

  return (
    <>
      <Header src={LogoDc} menuLinks={headerLinkItems} />
      <Main />
      <Footer />
    </>
  )
}

