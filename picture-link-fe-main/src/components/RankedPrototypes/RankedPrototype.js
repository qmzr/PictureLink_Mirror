import { ImagePreview } from "../ImagePreview/ImagePreview";
import {
  ImageClass,
  ImageScore,
  ImageName,
  ImagePrediction,
  ImageWrapper,
  DetailsTable,
  ScoreValue,
 } from "./RankedPrototypes.style";

export function RankedPrototype(props) {

  const { onClick, data, src } = props
  return (
    <ImageWrapper onClick={onClick}>
      <ImagePreview src={data.prototype_patch_image_url} />
      <ScoreValue>{data.top_class}</ScoreValue>
      <DetailsTable>
        <tr>
          <td>Class:</td>
          <td>{data.class_number}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{data.class_name}</td>
        </tr>
        <tr>
          <td>Score</td>
          <td>{data.score}</td>
        </tr>
        <tr>
          <td>Predication</td>
          <td>{data.probability}</td>
        </tr>
      </DetailsTable>
      {/* <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
      <ImageName>Red Headed</ImageName>
      <ImageScore>Total Score: 32.7%</ImageScore>
      <ImagePrediction>Confidence: 15%</ImagePrediction> */}
    </ImageWrapper>
  )
}