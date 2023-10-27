import SideMenu from "../SideMenu/SideMenu";
import Style from "./Dashboard.module.css"
import songImg from "../../assets/song-img.svg"
import { FaCirclePlay } from "react-icons/fa6";
import { AiFillDelete, AiOutlinePause } from "react-icons/ai";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
function Dashboard() {
    return (
        <div className={Style.Dashboard}>

            <SideMenu />

            <section>

                <header>

                    <ul>
                        <li>First-level Menu</li>
                        <li>/</li>
                        <li>Second-level Menu</li>
                        <li>/</li>
                        <li>Current Page</li>
                    </ul>

                    <div className={Style.headerTitleContainer}>
                        <p>Songs</p>
                        <button>Add Songs</button>
                    </div>

                </header>

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
                            <td className={Style.playPauseButton}><FaCirclePlay size={40} color="#FDB927" /></td>
                            <td><AiFillDelete size={14} opacity={0.45} /></td>
                        </tr>
                    </tbody>

                </table>

                <footer>

                    <div className={Style.progressBarContainer}>

                        <div className={Style.progressBar}>
                            <div className={Style.backGrey} style={{ background: `grey` }} />
                            <div className={Style.steps} style={{ background: `#000`, width: `50%` }} />
                        </div>

                    </div>

                    <div className={Style.footerBottom}>

                        <div className={Style.songName}>
                            <img src={songImg} alt="" />
                            <h5>Chaff & Dust</h5>
                        </div>

                        <div className={Style.playLogicButton}>
                            <MdOutlineSkipPrevious size={25} />
                            <AiOutlinePause size={25} />
                            <MdOutlineSkipNext size={25} />
                        </div>
                    </div>
                </footer>

            </section>
        </div>)
}

export default Dashboard;