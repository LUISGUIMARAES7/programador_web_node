import Header from './components/HeaderBeta';
import Pesquisa from './components/Pesquisa/Index';
import styled from 'styled-components';

const AppContainer = styled.div `
width: 100vw;
height: 100vh;
// background-image: linear-gradient(180deg, #FFF8F0, #F5EBD8, #EADAC1);
// color: #3E322C;
`;

function App() {
  return (
    <div className='body'>
      <Header />
      <Pesquisa />
      <AppContainer />
    </div>
  );
}

export default App;

