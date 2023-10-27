import Style from "./Header.module.css"

function Header() {
    return (
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
    )
}

export default Header;