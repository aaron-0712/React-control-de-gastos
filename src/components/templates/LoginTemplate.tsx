import styled from "styled-components";
import { BtnSave, v } from "../../index";
export function LoginTemplate() {
    return (
        <Container $imgFondo={v.imagenfondo}>
            <div className="contentCard">
                <span className="version">versión 1.0</span>
                <div className="contentImg">
                    <img src={v.logo} alt="Logo del Proyecto" />
                </div>
                <Titulo className="frase">Cerdyn</Titulo>
                <p>Toma el control de tus 💸gastos e 💰ingresos</p>
                <ContainerBtn>
                    <BtnSave
                        funcion={() => {}}
                        titulo="Iniciar con Google"
                        bgcolor={v.colorSecundario}
                        icono={<v.iconogoogle />}
                    />
                </ContainerBtn>
            </div>
        </Container>
    );
}
const Container = styled.div<{ $imgFondo: string }>`
    background-image: url(${(props) => props.$imgFondo});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.87);
    text-align: center;

    .contentCard {
        background-color: #131313;
        border-radius: 20px;
        gap: 30px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
        .version {
            color: #727272;
            text-align: start;
        }
        .contentImg {
            img {
                max-width: 60%;
                animation: flotar 1.5s ease-in-out infinite alternate;
            }
        }
        .frase {
            color: #909090;
            font-size: 1.2rem;
        }
    }

    @keyframes flotar {
        0% {
            transform: translate(0, 0px);
        }
        50% {
            transform: translate(0, 15px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }
`;

const Titulo = styled.h1`
    font-size: 5rem;
    font-weight: 700;
`;

const ContainerBtn = styled.span`
    display: flex;
    justify-content: center;
`;
