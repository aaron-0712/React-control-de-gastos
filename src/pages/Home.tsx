import styled from "styled-components";
import { HomeTemplate } from "../index";
export function Home() {
    return (
        <Container>
            <HomeTemplate />
        </Container>
    );
}
const Container = styled.div`
    height: 100vh;
`;
