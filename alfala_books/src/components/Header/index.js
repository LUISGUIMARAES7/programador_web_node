import Logo from "../Logo";
import IconesHeader from "../IconesHeader";
import OptionsHeader from "../OptionsHeader";
import './style.css'

function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OptionsHeader />
            <IconesHeader />
        </header>
    )
}

export default Header;