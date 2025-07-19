import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';


const PesquisaContainer = styled.section`
    text-align: center;
    padding: 85px 0;
    height: 100%;
    width: 100%;
`;
const Titulo = styled.h2`
    color: #3E322C;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;
const Subtitulo = styled.h3`
    color: #3E322C;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
`;
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
    &:hover {
       border: 1px solid grey;
   }
`;

const Input = styled.input`
background: transparent;
border: 1px solid grey;
padding: 20px 140px;
border-radius: 50px;
width: 200px;
color: #3E322C;
font-size: 16px;
margin-bottom: 30px;

&::placeholder {
    color:rgba(62, 50, 44, 0.5);
    font-size: 16px;
}
`;

function Pesquisa() {
    const [termoBusca, setTermoBusca] = useState('');
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    const handleInputChange = (evento) => {
        const texto = evento.target.value;
        setTermoBusca(texto);

        if (!texto.trim()) {
            setLivrosPesquisados([]);
            return;
        }

        const resultado = livros.filter(livro =>
            livro.nome.toLowerCase().includes(texto.toLowerCase())
        );
        setLivrosPesquisados(resultado);
    };

    return (
        <PesquisaContainer>
            <Titulo>Leaf Book - sua biblioteca digital moderna</Titulo>
            <Subtitulo>Encontre seu livro</Subtitulo>

            <Input
                placeholder="Escreva sua próxima leitura"
                value={termoBusca}
                onChange={handleInputChange}
            />

            {livrosPesquisados.map((livro) => (
                <Resultado key={`${livro.id}`}>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt={`Capa do livro ${livro.nome}`} />
                </Resultado>
            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;