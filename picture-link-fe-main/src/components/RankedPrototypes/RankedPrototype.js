import { ImagePreview } from "../ImagePreview/ImagePreview";
import { ImageWrapper, DetailsTable, ScoreValue } from "./RankedPrototypes.style";

export function RankedPrototype(props) {

  const { onClick, data, src, rankIndex } = props
  return (
    <ImageWrapper onClick={onClick}>
      <ImagePreview src={data.prototype_image} />
      <ScoreValue> {rankIndex + 1}
      </ScoreValue>
      <DetailsTable>
        <tr>
          <td>Class:</td>
          <td>{data.classNumber}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{data.className}</td>
        </tr>
        <tr>
          <td>Score</td>
          <td>{data.score}</td>
        </tr>
      </DetailsTable>
    </ImageWrapper>
  )
}