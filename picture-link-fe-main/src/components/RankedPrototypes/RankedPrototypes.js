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
//  import Response from '../../response.json'
 import { observer } from "mobx-react-lite";
 import {store} from "../../store.js"


export const RankedPrototypes = observer((props) => {
  const top_10_prototypes = (store.uploadResponse?.top_10_prototypes || [])

  const { onItemClick } = props;
 return (
   <Container>
    <h4>Ranked Prototoypes</h4>
    <Content>
      {
        top_10_prototypes.map((top10, index) => {
          return <RankedPrototype
            src='images/image-1.png'
            data={top10}
            rankIndex={index}
            onClick={() => onItemClick(index)}
          />
        })
      }
    </Content>
  </Container>
 )
})
