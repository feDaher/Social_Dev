import styled from "styled-components"
import { useState, useRef, useEffect } from "react"

const Dots = styled.img`
  cursor: pointer;
`
const StyledContainerMenu = styled.div`
  position: relative;
`
const StyledMenu = styled.div`
  width: 200px;
  background-color: ${props => props.theme.white};
  position: absolute;
  right: 0;
  box-shadow: 6px 5px 15px 5px rgba(0,0,0, 0.20);
  border-radius: 5px;
  
  display: ${props => props.show ? 'block' : 'none'};
`
const StyledOption = styled.div`
  padding: 5px;
  cursor: pointer;

  :hover{
    background-color: ${props => props.theme.inputBackground};
  }
`

function Menu ( { options = [] }){
  const [show, setShow] = useState(false)
  const menuRef = useRef()

  useEffect(()=>{
    const handleClickOut = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
      setShow(false)
    }
    document.addEventListener('click', handleClickOut, true)
    return () => {
      document.removeEventListener('click', handleClickOut, true)
    }
  }, [menuRef])

  return (
    <StyledContainerMenu>
      <Dots src="/three-dots.svg" height="18px" onClick={() => setShow(!show)} />
      <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)}>
        {
          options.map((option, pos) => 
            <StyledOption 
              key={`menu-option-${pos}`} 
              onClick={option.onClick}
            > 
              {option.text}
            </StyledOption>
          )
        }
      </StyledMenu>
    </StyledContainerMenu>
  )
}

export default Menu