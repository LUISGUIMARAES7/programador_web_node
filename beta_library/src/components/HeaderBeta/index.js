import './style.css';
import Logo from '../LogoBeta';
import NavHeader from '../NavHeader';
import ButtonsHeader from '../ButtonsHeader';

function Header() {
    return (
        <header className="Header">
            <Logo />
            <NavHeader />
            <ButtonsHeader />
        </header>

    )
}

export default Header;