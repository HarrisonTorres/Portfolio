import { styled } from "styled-components";

export const Container = styled.div`
    padding-top: 4.6875rem;
    max-width: 1140px;
    width: 100%;
    height: 100vh;
    z-index: 1;
`
export const Container_banner = styled.div`
    display: inline-flex;
    max-width: 525px;
    height: 40.3125rem;
    padding: 1rem 0rem 1rem 5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    z-index: 2;

    background-color: transparent;
    backdrop-filter: blur(2px);
`
export const Image = styled.div`
    width: 13rem;
    height: 13rem;
    border-radius: 17rem;
    border: 1px solid #000;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    box-shadow: 0px 6px 12px 2px rgba(0, 0, 0, 0.25);
    z-index: 2;
`

export const Title = styled.h1`  

    color: var(---text-color-primary);
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
`

export const Text = styled.p`
    color: var(---text-color-primary);
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Cta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 2;
`

export const Button = styled.a`
    border-radius: 0.25rem;
    background: var(--primary-color);
    padding: 0.5rem 1rem;


    color: var(--text-color-secudary);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    text-decoration:none;
    cursor: pointer;    
`
export const ButtonSecudary = styled.a`
    color: var(--primary-color);
    text-align: center;
    /* --text-button-line */
    font-size: 1rem;
    font-family: var(--font-family-default);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
`