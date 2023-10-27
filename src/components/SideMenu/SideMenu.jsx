import Style from "./SideMenu.module.css"
import { CiGrid42 } from "react-icons/ci";
import { BiLogInCircle } from "react-icons/bi";

function SideMenu() {
    return (
        <div className={Style.sideMenu}>
            <h2>Logo</h2>

            <ul>
                <li>
                    <CiGrid42 size={25} />
                    <p>Songs</p>
                </li>

                <li className={Style.logout}>
                    <BiLogInCircle size={25} />
                    <p>Logout</p>
                </li>
            </ul>


        </div>
    )
}

export default SideMenu;