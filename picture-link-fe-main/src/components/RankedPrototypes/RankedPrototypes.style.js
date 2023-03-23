import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  color: #000;
  padding: 1rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`

export const ImageTitle = styled.div`
  font-size: 1.5rem;
  color: #000000;
`
export const ImageClass = styled.div`
  color: #2B3674;
  font-size: 0.8rem;
  line-height: 2;
`

export const ImageName = styled.div`
  font-size: .8rem;
  color: #A3AED0;
`

export const ImageScore = styled.div`
  font-size: .8rem;
  color: #A3AED0;
`

export const ImagePrediction = styled.div`
  font-size: .8rem;
  color: #A3AED0;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
`

export const ScoreValue = styled.div`
  padding: .5rem;
  font-size: 0.8rem;
  font-weight: bold;
  background: yellow;
  color: #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
`

export const DetailsTable = styled.table`
  td {
    font-size: .8rem;
  }

  td:first-child {
    color: #A3AED0;
    padding-right: .5rem;
  }

  td:nth-child(2) {
    font-weight: bold;
  }

`