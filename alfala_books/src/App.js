import './App.css';
import IconesHeader from './components/IconesHeader';
import Logo from './components/Logo';
import OptionsHeader from './components/OptionsHeader';

 
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OptionsHeader/>
        <IconesHeader />
      </header>
    </div>
  );
}
 
export default App;
 
 