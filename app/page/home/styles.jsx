import { styled } from "styled-components";

export const Container = styled.div`
    padding-top: 4.6875rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`
export const Content = styled.div`
    max-width: 1140px;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
`
export const Section = styled.div`
    max-width: 50%;
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 1.5rem;

    @media (max-width: 524px) {
        max-width: 100%;
    }
    `
export const Container_banner = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    display: inline-flex;
    max-width: 1140px;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    
    z-index: 2;
`
export const Image = styled.div`
    width: 13rem;
    height: 13rem;
    border-radius: 17rem;
    border: 1px solid #000;
    box-shadow: 0px 6px 12px 2px rgba(0, 0, 0, 0.25);
    z-index: 2;

    background-color: transparent;
    backdrop-filter: blur(2px);
    overflow: hidden;

    & > img:hover{
        cursor: pointer;
        transition: 0.5s;
        transform: scale(1.1);
    }
    & > img:active{
        opacity: 0.5;
    }
`

export const Title = styled.h1`  

    color: var(---text-color-primary);
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    border-radius: 12px;
    background-color: transparent;
    backdrop-filter: blur(4px);
`

export const Text = styled.p`
    color: var(---text-color-primary);
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    max-width: 525px;

    border-radius: 12px;
    background-color: transparent;
    backdrop-filter: blur(4px);
`

export const Cta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 2;

    border-radius: 12px;
    background-color: transparent;
    backdrop-filter: blur(4px);
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
export const NavSocialMidia = styled.div`
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 18.375rem;
    background-color: var(--primary-color);
    border-radius: 2.5rem 0rem 0rem 2.5rem;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    opacity: 0.4;

    transition: 0.5s;
    &:hover{
        opacity: 1;
        width: 3.25rem;
    }
    & > img {
        cursor: pointer;
    }
    
    @media (max-width: 524px) {
        display: none;
    }
`
export const SlidePorject = styled.div`
    width: 100%;
    height: 100%;
    
`