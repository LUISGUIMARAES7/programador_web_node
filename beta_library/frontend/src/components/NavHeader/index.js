import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    gap: 30px;
`;

const LinkNav = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #3E322C;
  font-size: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const textoNav = ['INÍCIO', 'CATÁLOGO', 'SOBRE'];


function NavHeader() {
    return (
        <Div>
            {textoNav.map((texto) => (
                <LinkNav href="#" className='nav'>{texto}</LinkNav>
            ))}
        </Div>
    )
}

export default NavHeader;