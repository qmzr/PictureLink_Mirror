import styled from "styled-components"


export const Content = styled.div`
  font-size: 1.2rem;
  color: #A3AED0;
  line-height: 1.5;
`


let height = 200

export const Container = styled.div`
  background: #fff;
  border-radius: 0.2rem;
  display: grid;
  grid-template-columns: 5fr 2fr;
  padding: 1rem;

  border: 1px solid red;


  > div:nth-child(2) {
    // height: ${p => height}px;
    // width: ${p => p.aspectRatio * height}px;
    width: 224px;
    height: 224px;
    position: relative;
  }


  img {
    width: 100%;
    height: 100%;
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
export const Marker = styled.div`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  border: 2px solid yellow;

  ${p => p.selected && `border-color: green;`}
`