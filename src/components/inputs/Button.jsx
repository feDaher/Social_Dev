import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 10px;
  border: 0;
  color: ${props => props.theme.white};
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: ${props => props.theme.primaryHover};
  }
`

export default Button