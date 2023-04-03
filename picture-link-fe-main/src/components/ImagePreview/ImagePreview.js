import { Container } from "./ImagePreview.style";
import { forwardRef } from "react";

function ImagePreviewComp(props, ref){
  const { src, children } = props;

  return (
    <Container>
      <img src={src} alt="red bellied woodpecker" ref={ref} />
      {children}
    </Container>
  )
}


export const ImagePreview = forwardRef(ImagePreviewComp)