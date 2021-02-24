import styled from 'styled-components';

export const Container = styled.button`
    width:100%;
    height:50px;

    border:none;
    border-radius:8px;

    color:${ props => props.theme.colors.white };
    background:linear-gradient(
        267.79deg, 
        ${ props => props.theme.colors.darkPurple } 0%, 
        ${ props => props.theme.colors.purple } 99.18%
    );
    
    font-weight:600;
    font-size:16px;

    box-shadow: 0px 10px 15px ${ props => props.theme.colors.pink }; 

    transition: border-radius .6s;

    &:hover{
        border-radius:30px;
    }
`;