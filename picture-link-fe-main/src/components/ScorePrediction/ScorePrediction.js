import { ImagePreview } from "../ImagePreview/ImagePreview";
import { Container, Score, TotalScore, ImageWrapper, Row } from "./ScorePrediction.style";


import Response from '../../response.json'
export function ScorePrediction(props){
  const { selectedBar } = props
  const top_10_class = Response.top_10_classes[selectedBar] || {}
  const payload = top_10_class?.prototypes?.map((data, index) => {
    return {
      prototype: data,
      test_image_patch: top_10_class.testImagePatches[index],
      score: top_10_class.scores[index],
      class_name: top_10_class.class_name
    }
  })
  console.log(payload, "this is payload")
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
          <ImagePreview src={data?.test_image_patch} />
          <ImagePreview src={data?.prototype} />
          <Score> {data?.score} </Score>
        </Row>
        ))
      }
      <Row>
       <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div> </div>
          <div>Total points to red-cockaded woodpecker</div>
          <div><b>168.8</b></div>
      </Row>
      </ImageWrapper>
   </Container>
 )
}
