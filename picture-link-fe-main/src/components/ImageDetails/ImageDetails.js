import { useEffect, useRef } from "react";
import { ImagePreview } from "../ImagePreview/ImagePreview";
import {
  Content,
  Container,
  ImageClass,
  ImageTotalScore,
  Marker,
 } from "./ImageDetails.style";
 import Response from '../../response.json'


export function ImageDetails(props){
 const { src, aspectRatio, coordinates, selectedItem } = props;

 const ref = useRef()

 const selectedCoordinate = selectedItem >= coordinates.length ? null : (coordinates || [])[selectedItem]

 return (
   <Container aspectRatio={aspectRatio}>
    <Content>
      <ImageClass>{Response.top_10_classes[0].class_number}: {Response.top_10_classes[0].class_name}</ImageClass>
      <ImageTotalScore valid={true}>Total Score: <span>{Response.top_10_classes[0].logit}</span></ImageTotalScore>
      <ImageTotalScore valid={false}>Confidence: <span>{Response.top_10_classes[0].probability}%</span></ImageTotalScore>
    </Content>


    <ImagePreview src={src} ref={ref}>
      {
        selectedCoordinate &&  <Marker
          left={selectedCoordinate[2]}
          top={selectedCoordinate[0]}
          width={selectedCoordinate[3]-selectedCoordinate[2]}
          height={selectedCoordinate[1]-selectedCoordinate[0]}
          selected
        />
      }

      {
        (src && coordinates && !selectedCoordinate) && (coordinates || []).map(coordinate => {
          {console.log(coordinate, 'coordinatecoordinatecoordinate')}
          return <Marker
            left={coordinate[2]}
            top={coordinate[0]}
            width={coordinate[3]-coordinate[2]}
            height={coordinate[1]-coordinate[0]}
          />
        })
      }
    </ImagePreview>
   </Container>
 )
}
