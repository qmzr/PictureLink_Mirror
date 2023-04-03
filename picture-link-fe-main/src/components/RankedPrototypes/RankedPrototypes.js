import { RankedPrototype } from "./RankedPrototype";
import { Container,
  ImageClass,
  ImageScore,
  ImageName,
  ImagePrediction,
  ImageWrapper,
  ImageTitle,
  Content,
 } from "./RankedPrototypes.style";
 import Response from '../../response.json'


 console.log(Response, 'ResponseResponseResponse')


export function RankedPrototypes(props){
  const { onItemClick } = props;
 return (
   <Container>
    <h4>Ranked Prototoypes</h4>
    <Content>
      {
        Response.top_10_classes.map((top10, index) => {
          return <RankedPrototype
            src='images/image-1.png'
            data={top10}
            onClick={() => onItemClick(index)}
          />
        })
      }
    </Content>
    {/* todo add a foreach loop through cordinates for the backend and display */}
    {/* <ImageTitle> Ranked Prototoypes</ImageTitle> */}
      {/* <ImageWrapper className="ranked-prototoypes">
        <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
        <ImageName>Red Headed</ImageName>
        <ImageScore>Total Score: 32.7%</ImageScore>
        <ImagePrediction>Confidence: 15%</ImagePrediction>
        <img className="ranked-prototoypes" src='images/image-1.png' alt="red bellied woodpecker" />
      </ImageWrapper>
      <ImageWrapper className="ranked-prototoypes">
        <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
        <ImageName>Northern Cardinal</ImageName>
        <ImageScore>Total Score: 32.7%</ImageScore>
        <ImagePrediction>Confidence: 15%</ImagePrediction>
        <img className="ranked-prototoypes" src='images/image-2.png' alt="red bellied woodpecker" />
      </ImageWrapper>
      <ImageWrapper className="ranked-prototoypes">
        <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
        <ImageName>Red Bellied</ImageName>
        <ImageScore>Total Score: 32.7%</ImageScore>
        <ImagePrediction>Confidence: 15%</ImagePrediction>
        <img className="ranked-prototoypes" src='images/image-3.png' alt="red bellied woodpecker" />
      </ImageWrapper>
      <ImageWrapper className="ranked-prototoypes">
        <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
        <ImageName>Purple finch</ImageName>
        <ImageScore>Total Score: 32.7%</ImageScore>
        <ImagePrediction>Confidence: 15%</ImagePrediction>
        <img className="ranked-prototoypes" src='images/image-4.png' alt="red bellied woodpecker" />
      </ImageWrapper>

      <ImageWrapper className="ranked-prototoypes">
        <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
        <ImageName>Red-Crested cardinal</ImageName>
        <ImageScore>Total Score: 32.7%</ImageScore>
        <ImagePrediction>Confidence: 15%</ImagePrediction>
        <img className="ranked-prototoypes" src='images/image-5.png' alt="red bellied woodpecker" />
      </ImageWrapper>

      <ImageWrapper className="ranked-prototoypes">
        <ImageClass>Class 10: Red Bellied Woodpecker</ImageClass>
        <ImageName>Masked crimson</ImageName>
        <ImageScore>Total Score: 32.7%</ImageScore>
        <ImagePrediction>Confidence: 15%</ImagePrediction>
        <img className="ranked-prototoypes" src='images/image-6.png' alt="red bellied woodpecker" />
      </ImageWrapper> */}
   </Container>
 )
}
