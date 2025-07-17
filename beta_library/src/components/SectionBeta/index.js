import './style.css';
import livro from '../../img/livro.png';
import livro3 from '../../img/livro3.png';
import livro4 from '../../img/livro4.png';
import livro5 from '../../img/livro5.png';
import livro6 from '../../img/livro6.png';

const livros = [livro,livro3,livro4,livro5,livro6]

function SectionLivros() {
    return(
        <section className='livros'>
            {livros.map((livro)=>(
                <img src={livro} />
            ))}
        </section>
    )
}

export default SectionLivros;