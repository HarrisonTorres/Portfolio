import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`
export const Content = styled.div`
    max-width: 1140px;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100%;
    margin: auto;
`
export const Section = styled.div`
    max-width: 50%;
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.20);
    box-shadow: 4px 0px 24px 0px rgba(255, 255, 255, 0.08);
`
export const TextContainer = styled.div`
    max-width: 25rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
`
export const Title = styled.h2`
    color: var(--text-color-secudary);
    font-family: var(---font-family-default);
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const Subtitle = styled.h3`
    color: var(--text-color-secudary);
    font-family: var(---font-family-default);
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const Description = styled.p`
    color: var(--text-color-secudary);
    font-family: var(---font-family-default);
    font-size: 1;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`
export const Link = styled.a`
    color: var(--text-color-secudary);
    font-family: var(---font-family-default);
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
    text-transform: capitalize;
`
