import Style from "./CurrentSongFooter.module.css"
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import { AiOutlinePause } from "react-icons/ai";
import songImg from "../../assets/song-img.svg"
import { BsPlayFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { Howl, Howler } from 'howler';

function CurrentSongFooter() {
    const url = `https://assets.mixkit.co/music/preview/mixkit-house-fest-113.mp3`

    const { isSongPlaying, setIsSongPlaying } = useContext(UserContext)
    const [sound, setSound] = useState(null);

    const playAudio = () => {
        if (sound) {
            if (isSongPlaying) {
                sound.pause()
            } else {
                sound.play()
            }
            setIsSongPlaying(prev => !prev);
        } else {
            const newSound = new Howl({
                src: [url],
                html5: true,
                onplayerror: function (error) {
                    console.error("Error playing audio:", error);
                }
            });
            newSound.once('load', function () {
                newSound.play();
                setIsSongPlaying(prev => !prev)
            });
            newSound.on('end', function () {
                setIsSongPlaying(prev => !prev)
            });

            setSound(newSound);
        }

    }


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

                <div className={Style.playLogicButtonContainer}>
                    <MdOutlineSkipPrevious className={Style.playLogicButton} />
                    {isSongPlaying ? <AiOutlinePause className={Style.playLogicButton} onClick={playAudio}/>
                        : <BsPlayFill className={Style.playLogicButton} onClick={playAudio} />}
                    <MdOutlineSkipNext className={Style.playLogicButton} />
                </div>
            </div>
        </footer>

    )
}

export default CurrentSongFooter;