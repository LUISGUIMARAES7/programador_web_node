import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Li = styled.li`
  list-style: none;
`


const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <Ul>
      {icones.map((icone) => (
        <Li>
          <img src={icone}></img>
        </Li>

      ))}
    </Ul>

  )
}

export default IconesHeader;