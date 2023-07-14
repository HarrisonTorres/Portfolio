import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 0;
  position: sticky;
  top: 0;
`;
export const Content = styled.div`
  max-width: 1140px;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
  margin: auto;
`;
export const Section = styled.div`
  max-width: 50%;
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.2);
  box-shadow: 4px 0px 24px 0px rgba(255, 255, 255, 0.08);
  z-index: 3;

  @media (max-width: 524px) {
    max-width: none;
  }
`;
export const TextContainer = styled.div`
  max-width: 25rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`;
export const Title = styled.h2`
  color: var(--text-color-secudary);
  font-family: var(---font-family-default);
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Subtitle = styled.h3`
  color: var(--text-color-secudary);
  font-family: var(---font-family-default);
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Description = styled.p`
  color: var(--text-color-secudary);
  font-family: var(---font-family-default);
  font-size: 1;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const Link = styled.a`
  color: var(--text-color-secudary);
  font-family: var(---font-family-default);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: capitalize;
`;
export const BgImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  z-index: 0;

  .image-1 {
    position: absolute;
    top: calc(50% - 300px);
    right: calc(40% - 300px);
    margin: auto;

    background-size: cover;

    animation-duration: 10s;
    animation-name: scale;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .image-2 {
    position: absolute;
    top: calc(50% - 300px);
    right: calc(40% - 300px);
    margin: auto;
    
    animation-duration: 5s;
    animation-name: float;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .image-3 {
    position: absolute;
    top: calc(50% - 300px);
    right: calc(40% - 300px);
    margin: auto;

    animation-duration: 3s;
    animation-name: float;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes scale {
    0% {
    }
    50% {
      transform: scale(0.9);
    }
    100% {
    }
  }
  @keyframes float {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(8px, -10px);
      transform: scale(1.1);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;
