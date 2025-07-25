import logo from '../../img/logo.svg';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
`

const Img = styled.img`
    height: 60px;
`

function Logo() {
    return (
        <Div>
            <Img src={logo} alt='Alfala books logo'></Img>
            <p> <strong>Alfala</strong>Books</p>
        </Div>
    )
}

export default Logo;