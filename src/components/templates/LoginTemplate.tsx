import styled from "styled-components";
import { BtnSave, v } from "../../index";
export function LoginTemplate() {
    return (
        <Container>
            <div>
                <span>versión 1.0</span>
                <div>
                    <img src="" alt="" />
                </div>
                <Titulo>Cerdyn</Titulo>
                <p>Toma el control de tus 💸gastos e 💰ingresos</p>
                <ContainerBtn>
                    <BtnSave
                        funcion={() => {}}
                        titulo="Iniciar con Google"
                        bgcolor="Hola"
                        icono={<v.iconogoogle />}
                    />
                </ContainerBtn>
            </div>
        </Container>
    );
}
const Container = styled.div`
    background-image: url(${v.imagenfondo});
`;

const Titulo = styled.h1`
    font-size: 5rem;
    font-weight: 500;
`;

const ContainerBtn = styled.span`
    display: flex;
    justify-content: center;
`;
