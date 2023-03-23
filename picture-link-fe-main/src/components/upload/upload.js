import { useRef } from 'react'
import { Container, UploadDescription, UploadIcon, UploadText } from './upload.style'

export function Upload(props){
  const { onChange } = props;
  const inputRef = useRef()

  const handleChange = (e) => {
    const form = new FormData()
    form.append('image', e.target.files[0])

    // upload to backend
    onChange(e.target.files[0])
  }

  return(
    <Container>
      <UploadIcon>🌧</UploadIcon>
      <UploadText>Upload</UploadText>
      <UploadDescription>PNG, JPG & GIF files are allowed</UploadDescription>
      <input type='file' ref={inputRef} onChange={handleChange} max={1} />
    </Container>
  )
}