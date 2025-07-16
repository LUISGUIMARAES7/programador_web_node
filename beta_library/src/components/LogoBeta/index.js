import logo from '../../img/logoBook.svg';
import './style.css'

function Logo(){
    return (
        <div className='logo'>
            <img src={logo} alt='logo book'></img>
        </div>
    )
}

export default Logo;