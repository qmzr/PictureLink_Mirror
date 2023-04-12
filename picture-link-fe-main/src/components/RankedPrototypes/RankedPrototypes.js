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
  console.log(top_10_prototypes, "These are the list of prototypes.")
  console.log(store.uploadResponse?.top_10_classes , "These are the list of prototypes.")

  const { onItemClick } = props;
 return (
   <Container>
    { store.status === "loading" && (<img class="center-image" src="/images/Loading_icon.gif" alt="loading ......"/>)}
    {store.status === "complete" && (
      <span>
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
      </span>
    )}
  </Container>
 )
})
