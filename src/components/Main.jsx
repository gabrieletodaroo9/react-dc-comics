import CardSection from "./CardSection"
import Jumbotron from "./Jumbotron"
import SideContent from "./SideContent"

export default function Main({ comics, sideContentLink }) {
    return (
        <main>
            <Jumbotron />
            <CardSection comics={comics} />
            <SideContent sideContentLink={sideContentLink} />
        </main>
    )
}