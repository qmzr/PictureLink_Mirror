import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    width: 100vw;
    min-height: 100vh;
    background: #F4F7FE;
  }
`

export const Container = styled.div`
  color: #000;
  max-width: 80rem;
  margin: 5rem auto;
`

export const OverviewSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`

export const ClassificationSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`


export const GraphSection = styled.div`
  background: #fff;
  border-radius: 0.2rem;
`

export const ImagePrototypesSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  h4 {
    font-size; 1.8rem;
    color: #000;
  }

  > div {
    background: #fff;
  }

`