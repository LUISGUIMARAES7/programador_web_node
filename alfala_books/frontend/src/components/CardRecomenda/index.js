import {Titulo} from '../Titulo';
import styled from "styled-components";

const CardDiv = styled.div`
   align-items: center;
   background-color: #FFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   display: flex;
   margin: 0 auto;
   max-width: 600px;
   padding: 25px 20px;
   justify-content: space-around;
   width: 100%; 
`
const Botao = styled.button`
   background-color: #EB9B00;
   color: #FFF;
   padding: 10px 0px;
   font-size: 16px;
   border: none;
   font-weight: 900;
   display: block;
   text-align: center;
   width: 150px;
&:hover {
       cursor: pointer;
   }
`
const DescricaoP = styled.p`
   max-width: 300px;
`
const SubtituloH4 = styled.h4`
   color: #002F52;
   font-size: 18px;
   font-weight: bold;
   margin: 15px 0;
`
const ImgLivro = styled.img`
   width: 150px;
`

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
    return (
        <CardDiv>
            <div>
                <Titulo
                    tamanhoFonte="16px"
                    cor="#EB9B00"
                    alinhameno="left"
                > {titulo}
                </Titulo>
                <SubtituloH4>
                    {subtitulo}
                </SubtituloH4>
                <DescricaoP>
                    {descricao}
                </DescricaoP>
            </div>
            <div>
                <ImgLivro src={img} />
                <Botao>Saiba mais</Botao>
            </div>
        </CardDiv>
    )
}

export default CardRecomenda;