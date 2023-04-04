import { ImagePreview } from "../ImagePreview/ImagePreview";
import { Container, Score, TotalScore, ImageWrapper, Row } from "./ScorePrediction.style";
import Response from '../../response.json'
export function ScorePrediction(props){
  const { selectedBar } = props
 return (
   <Container>
    <h4>Red Cockaded Woodpecker</h4>
    {
      Response.top_10_classes.filter((item, index)=> index === selectedBar).map((data, index) => {
      return(<ImageWrapper>
          <Row>
            <div> Test Image</div>
            <div> Prototype Image</div>
            <div> Similarity Score</div>
          </Row>
        <Row>
          {data.prototypes.map((prototype) => {
              return(<ImagePreview src={prototype} />)
            })
          }
           {data.testImagePatches.map((test_image_patch) => {
              return(<ImagePreview src={test_image_patch} />)
            })
          }
           {data.scores.map((score) => {
              return(<Score> {score} </Score>)
            })
          }
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div> </div>
          <div>Total points to `${data.class_name}`</div>
          <div><b>{Math.round(data.logit * 100)}</b></div>
        </Row>
        {/* <Row>
        <ImagePreview src="images/image-9.png" />
          <ImagePreview src="images/image-10.png" />
          <Score>{data.score} </Score>

          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div> </div>
          <div>Total points to `${data.class_name}`</div>
          <div><b>{Math.round(data.logit * 100)}</b></div>
        </Row> */}
        {/* <Row>
          <ImagePreview src="images/image-11.png" />
          <ImagePreview src="images/image-12.png" />
          <Score> 3 </Score>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div> </div>
          <div>Total points to red-cockaded woodpecker</div>
          <div><b>168.8</b></div>
        </Row> */}
        </ImageWrapper>
      )
      })
  }
   </Container>
 )
}
