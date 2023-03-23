import { Container } from "./ImagePreview.style";
export function ImagePreview(props){
  const { src } = props;

  return (
    <Container>
      <img src={src} alt="red bellied woodpecker" />
    </Container>
  )
}