import { Controller } from "react-hook-form";

import styled from 'styled-components';

export function Input({ leftIcon, name, control, ...rest }) {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field }) =>  <InputText {...field} {...rest} />}
      />
       
    </InputContainer>
  )
}

const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display:flex;
    align-items: center;
    margin-bottom: 20px;
`

const IconContainer = styled.div`
    margin-right: 10px;
`

const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 30px;
    
`
