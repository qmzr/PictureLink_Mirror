import { ImagePreview } from "../ImagePreview/ImagePreview";
import { Container, Score, TotalScore, ImageWrapper, Row } from "./ScorePrediction.style";
import { observer } from "mobx-react-lite";
import {store} from "../../store.js"

export const ScorePrediction = observer((props) => {
  const { selectedBar } = props
  const top_10_class = (store.uploadResponse?.top_10_classes || [])[selectedBar]
  // const top_10_class = store.uploadResponse?.top_10_classes[selectedBar] || {}
  const payload = top_10_class?.prototypes?.map((data, index) => {
    return {
      prototype: data,
      test_image_patch: top_10_class.testImagePatches[index],
      score: top_10_class.scores[index],
      class_name: top_10_class.class_name,
      total_class_score: top_10_class.logit
    }
  })
 return (
   <Container>
    {store.status === "loading" && (<img class="center-image" src="/images/Loading_icon.gif" alt="loading ......"/>)}
    {store.status === "complete" && (
      <span>
        <h4>{payload && payload[0].class_name}</h4>
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
            <div>Total points to {payload && payload[0].class_name}</div>
            <div><b>{payload && payload[0].total_class_score}</b></div>
        </Row>
        </ImageWrapper>
      </span>
    )}
   </Container>
 )
})