import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    
    label{
        font-size:10px;
        margin-left:8px;
    }

    span{
        color:${ props => props.theme.colors.red };
        font-size:10px;

        margin-left:15px;
    }
`;

export const Container = styled.div`
    width:100%;
    height:50px;    

    border:1px solid transparent;
    border-color:${ props => !props.isValid ? `${ props.theme.colors.red }` : `${ props.theme.colors.lightPurple }` };
    border-radius:8px;

    padding:0 12px;
    margin-top:8px;

    display:flex;
    align-items:center;
    justify-content:space-between;
    
    &:focus-within{
        border-width:2px;    
    }

    input{
        border:none;
        height:100%;
    }

    img{
        margin-right:10px;
    }
`;