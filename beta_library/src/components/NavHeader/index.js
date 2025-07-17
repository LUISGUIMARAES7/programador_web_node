import './style.css';

const textoNav = ['INÍCIO', 'CATÁLOGO', 'SOBRE'];


function NavHeader() {
    return (
        <div className='nav-header'>
            {textoNav.map((texto) => (
                <a href="#" className='nav'>{texto}</a>
            ))}
        </div>
    )
}

export default NavHeader;