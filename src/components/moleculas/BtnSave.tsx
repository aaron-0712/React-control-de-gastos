import styled from "styled-components";
import { Icono } from "../../index";
import type React from "react";

interface Props {
    funcion: () => void;
    titulo: string;
    bgcolor: string;
    icono: React.ReactNode;
}

export function BtnSave({ funcion, titulo, bgcolor, icono }: Props) {
    return (
        <Container type="submit" $bgcolor={bgcolor} onClick={funcion}>
            <Icono>{icono}</Icono>
            <span className="btn">{titulo}</span>
        </Container>
    );
}
const Container = styled.button<{ $bgcolor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    gap: 10px;
    background-color: initial;

    .btn {
        background: ${(props) => props.$bgcolor};
        padding: 0.6em 1.3em;
        font-weight: 900;
        font-size: 18px;
        border: 3px solid black;
        border-radius: 0.4em;
        box-shadow: 0.1em 0.1em #000;
        transition: 0.2s;
        white-space: 1px;
        color: #000;
        &:hover {
            transform: translate(-0.05em, -0.05em);
            box-shadow: 0.15em 0.15em #000;
        }
        &:active {
            transform: translate(0.05em, 0.05em);
            box-shadow: 0.05em 0.05em #000;
        }
    }
`;
