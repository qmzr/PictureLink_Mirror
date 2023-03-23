import { ImagePreview } from "../ImagePreview/ImagePreview";
import { Container, Score, TotalScore, ImageWrapper, Row } from "./ScorePrediction.style";
export function ScorePrediction(){
 return (
   <Container>
    <h4>Red Cockaded Woodpecker</h4>
    {/* todo add a foreach loop through cordinates for the backend and display */}
    {/* <ImageTitle> Red Cockaded Woodpecker</ImageTitle> */}
      <ImageWrapper>
       <Row>
        <ImagePreview src="images/image-7.png" />
        <ImagePreview src="images/image-8.png" />
        <Score> 1 </Score>
       </Row>
       <Row>
       <ImagePreview src="images/image-9.png" />
        <ImagePreview src="images/image-10.png" />
        <Score> 2 </Score>
       </Row>
       <Row>
        <ImagePreview src="images/image-11.png" />
        <ImagePreview src="images/image-12.png" />
        <Score> 3 </Score>
       </Row>
      </ImageWrapper>
   </Container>
 )
}
