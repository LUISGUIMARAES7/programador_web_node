import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  gap: 30px;
`;

const Li = styled.li`
  font-family: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE'];

function OptionsHeader() {
  return (
    <Ul>
      {textoOpcoes.map((texto) => (
        <Li>
          <p>{texto}</p>
        </Li>
      ))}
    </Ul>
  )
}

export default OptionsHeader;