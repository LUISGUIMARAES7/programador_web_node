import Logo from '../Logo';
import NavHeader from '../NavHeader';
import ButtonsHeader from '../ButtonsHeader';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
`;

function Header() {
    return (
        <Container>
            <Logo />
            <NavHeader />
            <ButtonsHeader />
        </Container>
    )
}

export default Header;