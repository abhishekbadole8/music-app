import Style from "./CurrentSongFooter.module.css"
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import { AiOutlinePause } from "react-icons/ai";
import songImg from "../../assets/song-img.svg"
import { BsPlayFill } from "react-icons/bs";

function CurrentSongFooter() {
    return (

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
                    <BsPlayFill size={25}/>
                    <MdOutlineSkipNext size={25} />
                </div>
            </div>
        </footer>

    )
}

export default CurrentSongFooter;