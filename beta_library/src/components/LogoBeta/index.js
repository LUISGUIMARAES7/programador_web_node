import logo from '../../img/logo.svg';
import './style.css';

function Logo(){
    return (
        <div className='logo'>
            <img src={logo} alt='logo book' />
        </div>
    )
}

export default Logo;