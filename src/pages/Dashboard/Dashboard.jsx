import Style from "./Dashboard.module.css"
import songImg from "../../assets/song-img.svg"
import { FaCirclePlay,FaCirclePause } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../../components/Header/Header";
import CurrentSongFooter from "../../components/CurrentSongFooter/CurrentSongFooter";

function Dashboard() {
    return (
        <div className={Style.Dashboard}>

            <SideMenu />

            <section>

                <Header />

                <table>
                    <thead>
                        <tr>
                            <th>SONG NAME</th>
                            <th>SOURCE</th>
                            <th>ADDED ON</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className={Style.songNameContainer}>
                                <img src={songImg} alt="" />
                                <p>Song Name</p>
                            </td>
                            <td>Youtube</td>
                            <td>17/06/2021</td>
                            <td className={Style.playPauseButton}><FaCirclePlay size={40} color="#FDB927" /></td>
                            <td><AiFillDelete size={14} opacity={0.45} /></td>
                        </tr>
                        <tr>
                            <td className={Style.songNameContainer}>
                                <img src={songImg} alt="" />
                                <p>Song Name</p>
                            </td>
                            <td>Youtube</td>
                            <td>17/06/2021</td>
                            <td className={Style.playPauseButton}><FaCirclePlay size={40} color="#FDB927" /></td>
                            <td><AiFillDelete size={14} opacity={0.45} /></td>
                        </tr>
                        <tr>
                            <td className={Style.songNameContainer}>
                                <img src={songImg} alt="" />
                                <p>Song Name</p>
                            </td>
                            <td>Youtube</td>
                            <td>17/06/2021</td>
                            <td className={Style.playPauseButton}>
                                <FaCirclePlay size={40} color="#FDB927" />
                                <FaCirclePause size={40} color="#FDB927" />
                            </td>
                            <td><AiFillDelete size={14} opacity={0.45} /></td>
                        </tr>
                    </tbody>

                </table>

                <CurrentSongFooter />

            </section>

        </div >)
}

export default Dashboard;