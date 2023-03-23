import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  color: #000;

  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`
export const Score = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem 2rem;
  color: #2B3674;
`

export const TotalScore = styled.div`
  font-size: .8rem;
  color: #3d3d3d;
`

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    min-height: 100%;
  }
`
