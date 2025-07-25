import {livros} from './dadosUltimosLancamentos';
import {Titulo} from '../Titulo';
import CardRecomenda from "../CardRecomenda";
import ImagemLivro from '../../img/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
   background-color: #EBECEE;
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;
`
const NovosLivrosContainer = styled.div`
   margin-top: 30px;
   display: flex;
   width: 100%;
   justify-content: center;
   cursor: pointer;
`

function UltimosLancamentos (){
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livros => (
                    <img src={livros.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao={"Contruindo uma aplicação com a plataforma Google"}
                img={ImagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;