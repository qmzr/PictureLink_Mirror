import { ImagePreview } from "../ImagePreview/ImagePreview";
import { Container, Score, TotalScore, ImageWrapper, Row } from "./ScorePrediction.style";
import Response from '../../response.json'
export function ScorePrediction(props){
  const { selectedBar } = props
  const top_10_class = Response.top_10_classes[selectedBar] || {}
  const payload = top_10_class?.prototypes?.map((data, index) => {
    return {prototype: data, test_image_patch: top_10_class.testImagePatches[index], score: top_10_class.scores[index]}
  })

 return (
   <Container>
    <h4>Red Cockaded Woodpecker</h4>
      <ImageWrapper>
        <Row>
          <div> Test Image</div>
          <div> Prototype Image</div>
          <div> Similarity Score</div>
        </Row>
        { payload?.map((data, index) =>(
        <Row>
          <ImagePreview src={data?.prototype} />
          <ImagePreview src={data?.test_image_patch} />
          <Score> {data?.score} </Score>
        </Row>
        ))
      }
      </ImageWrapper>
   </Container>
 )
}
