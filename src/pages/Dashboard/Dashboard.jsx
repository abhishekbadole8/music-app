import Style from "./Dashboard.module.css"
import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../../components/Header/Header";
import CurrentSongFooter from "../../components/CurrentSongFooter/CurrentSongFooter";
import { useContext } from "react";
import { UserContext } from "../../App";
import Table from "../../components/Table/Table";

function Dashboard() {

    const { isSongPlaying } = useContext(UserContext)

    return (
        <div className={Style.Dashboard}>

            <SideMenu />

            <section>

                <Header />

                <Table isSongPlaying={isSongPlaying}/>

                <CurrentSongFooter />

            </section>

        </div >)
}

export default Dashboard;