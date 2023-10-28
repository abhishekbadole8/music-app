import Style from "./Table.module.css"
import songImg from "../../assets/song-img.svg"
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";


function Table({ isSongPlaying }) {

    return (
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
                    <td className={Style.playPauseButton}>
                        {isSongPlaying ? <FaCirclePause size={40} className={Style.pauseButton} />
                            : <FaCirclePlay size={40} className={Style.playButton} />}
                    </td>
                    <td><AiFillDelete size={14} className={Style.deleteButton} /></td>
                </tr>
            </tbody>

        </table>
    )
}

export default Table;