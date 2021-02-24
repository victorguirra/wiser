import React from 'react';
import { Wrapper, Container } from './styles';

import ErrorIcon from '../../assets/images/error.svg';

function Input({ type, label, placeholder, onChange, isValid, message }){
    return(
        <Wrapper>

            <label>{ label.toUpperCase() }</label>

            <Container isValid={ isValid }>

                <input type={ type } placeholder={ placeholder } onChange={ onChange }/>

                { !isValid && (
                    <img src={ ErrorIcon } alt="Error" />
                )}

            </Container>
            
            { !isValid && (
                <span>{ message }</span>
            )}

        </Wrapper>
    )
}

export default Input;