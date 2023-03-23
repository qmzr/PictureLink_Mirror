import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  border-radius: .3rem;
  cursor: pointer;
  align-items: center;
  gap: 0.4rem;

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

export const StatIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F4F7FE;
  padding: .5rem;
  border-radius: 4px;
  font-size: 2rem;
`

export const StatBody = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const StatTitle = styled.div`
  color: #A3AED0;
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
`

export const StatValue = styled.div`
  color: #2B3674;
  font-size: 1.6rem;

`