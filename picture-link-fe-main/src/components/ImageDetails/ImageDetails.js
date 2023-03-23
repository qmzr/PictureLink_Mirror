import { ImagePreview } from "../ImagePreview/ImagePreview";
import {
  Content,
  Container,
  ImageClass,
  ImageTotalScore,
 } from "./ImageDetails.style";


export function ImageDetails(props){
 const { src } = props;

 console.log(src, 'srcsrcsrc')
 return (
   <Container>
    <Content>
      <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
      <ImageTotalScore valid={true}>Total Score: <span>32.7%</span></ImageTotalScore>
      <ImageTotalScore valid={false}>Confidence: <span>15%</span></ImageTotalScore>
    </Content>
    <ImagePreview src={src} />
   </Container>
 )
}