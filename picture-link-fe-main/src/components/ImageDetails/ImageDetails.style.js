import styled from "styled-components"


export const Content = styled.div`
  font-size: 1.2rem;
  color: #A3AED0;
  line-height: 1.5;
`


export const Container = styled.div`
  background: #fff;
  border-radius: 0.2rem;
  display: grid;
  grid-template-columns: 5fr 2fr;
  padding: 1rem;

  img {
    min-width: 260px;
  }
`

export const ImageClass = styled.div`
  color: #2B3674;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`

export const ImageTotalScore = styled.div`

  ${({ valid }) =>  {
    if (valid) {
      return `
        span { color: green }
      `
    }

    return ` span { color: red }`

  }}
`

export const ImageConfidence = styled.div`
  // font-size: .8rem;
  // color: #A3AED0;
`

export const ImageWrapper = styled.div`
  width: 16.5rem;
  height: 20.6rem;
`