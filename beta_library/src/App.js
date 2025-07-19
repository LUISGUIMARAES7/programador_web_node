import Header from './components/Header';
import Pesquisa from './components/Pesquisa/Index';
import styled from 'styled-components';

const AppContainer = styled.div `
width: 100vw;
min-height: 100vh;
`;

function App() {
  return (
    <AppContainer className='body'>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;

