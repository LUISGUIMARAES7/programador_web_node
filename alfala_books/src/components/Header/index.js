import Logo from "../Logo";
import IconesHeader from "../IconesHeader";
import OptionsHeader from "../OptionsHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    padding: 10px;
    gap: 30px;
    justify-content: center;
`

function Header() {
    return (
        <header className="App-header">
            <HeaderContainer >
                <Logo />
                <OptionsHeader />
                <IconesHeader />
            </HeaderContainer >
            
        </header>
    )
}

export default Header;