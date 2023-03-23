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

export function RankedPrototype() {
  return (
    <ImageWrapper>
      <ImagePreview src='images/image-1.png' />
      <ScoreValue>10</ScoreValue>
      <DetailsTable>
        <tr>
          <td>Class:</td>
          <td>29</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>Randome value</td>
        </tr>
        <tr>
          <td>Score</td>
          <td>29</td>
        </tr>
        <tr>
          <td>Predication</td>
          <td>29</td>
        </tr>
      </DetailsTable>
      {/* <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
      <ImageName>Red Headed</ImageName>
      <ImageScore>Total Score: 32.7%</ImageScore>
      <ImagePrediction>Confidence: 15%</ImagePrediction> */}
    </ImageWrapper>
  )
}