import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 10px;
  border: 0;
  color: ${props => props.theme.white};
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s;

  ${props => !props.disabled && 'cursor:pointer'};
  :hover {
    background-color: ${props => props.theme.primaryHover};
  }
  :disabled {
    background-color: ${props => props.theme.disabled};
  }
`

const Button = ({ children, loading, disabled, ...props }) => {
  return (
    <StyledButton 
    disabled={disabled || loading}
    {...props}
    > 
      {loading && <img src="./loading.svg" width="20px" />}
      {!loading && children}
    </StyledButton>
  )
}
export default Button