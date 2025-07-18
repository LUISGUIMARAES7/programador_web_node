import Logo from '../LogoBeta';
import NavHeader from '../NavHeader';
import ButtonsHeader from '../ButtonsHeader';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient( #faad06 35%, #c58803 100%);
  color: white;
  padding: 15px 30px;
`


function Header() {
    return (
        <header className="Header">
            <Container>
                <Logo />
                <NavHeader />
                <ButtonsHeader />
            </Container>
        </header>

    )
}

export default Header;