import { useEffect, useRef } from "react";
import { ImagePreview } from "../ImagePreview/ImagePreview";
import {
  Content,
  Container,
  ImageClass,
  ImageTotalScore,
  Marker,
 } from "./ImageDetails.style";


export function ImageDetails(props){
 const { src, aspectRatio, coordinates, selectedItem } = props;

 const ref = useRef()

 const selectedCoordinate = selectedItem >= coordinates.length ? null : (coordinates || [])[selectedItem]

//  useEffect(() => {
//   console.log(ref.current.clientWidth, ref.current.clientHeight, 'ssssssssss')
//  }, [src])

 return (
   <Container aspectRatio={aspectRatio}>
    <Content>
      <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
      <ImageTotalScore valid={true}>Total Score: <span>32.7%</span></ImageTotalScore>
      <ImageTotalScore valid={false}>Confidence: <span>15%</span></ImageTotalScore>
    </Content>


    <ImagePreview src={src} ref={ref}>
      {
        selectedCoordinate &&  <Marker
          x={selectedCoordinate[2]}
          y={selectedCoordinate[0]}
          width={selectedCoordinate[3]-selectedCoordinate[2]}
          height={selectedCoordinate[1]-selectedCoordinate[0]}
          selected
        />
      }

      {
        (src && coordinates && !selectedCoordinate) && (coordinates || []).map(coordinate => {
          return <Marker
            x={coordinate[2]}
            y={coordinate[0]}
            width={coordinate[3]-coordinate[2]}
            height={coordinate[1]-coordinate[0]}
          />
        })
      }
    </ImagePreview>
   </Container>
 )
}

// [10, 2, 4, 3], [y1, y2, x1, x2]
// [47, 224, 4, 224],
// y2 - y1
