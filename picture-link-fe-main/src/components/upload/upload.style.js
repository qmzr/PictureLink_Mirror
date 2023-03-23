import styled from "styled-components";

export const Container = styled.label`
  background: #fff;
  padding: 1rem 1.5rem;
  display: inline-flex;
  flex-direction: column;
  border-radius: .3rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0px 4px rgba(67, 24, 255, 0.2);
  }

  input {
    visibility: hidden;
    position: absolute;
  }
`

export const UploadIcon = styled.div`
  font-size: 3rem;
`

export const UploadText = styled.div`
  color: #4318FF;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2;
`

export const UploadDescription = styled.div`
  font-size: .8rem;
  color: #898989;
`