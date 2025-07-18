import styled from 'styled-components';

const DivButtons = styled.div`
display: flex;
gap: 10px;
`;

const Btn = styled.button`
padding: 8px 16px;
background-color: #DDB892;
color: #4B3E2E;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 5px;
cursor: pointer;
width: 100px;
height: auto;
font-size: 1rem;
font-weight: bold;

&:hover{
    background-color: #f8b754;
}
`;

function ButtonsHeader() {
    return (
        <DivButtons className='buttonsHeader'>
            <Btn className="button">Register</Btn>
            <Btn className="button">Login</Btn>
        </DivButtons>
    )
}

export default ButtonsHeader;