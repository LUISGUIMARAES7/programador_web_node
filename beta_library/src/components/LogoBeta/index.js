import logo from '../../img/logo.svg';
import styled from 'styled-components';

const Div = styled.div`
    .logo {
    display: flex;  
    }

    img {
        height: 100px;
        width: auto;
    }
`;

function Logo(){
    return (
        <Div className='logo'>
            <img src={logo} alt='logo book' />
        </Div>
    )
}

export default Logo;