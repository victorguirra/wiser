import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width:100%;
    height:100vh;

    display:flex;
`;

export const ImgContainer = styled.div`
    width:45%;
    opacity:1;

    &:after{
        width:45%;
        content:'';
        
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        
        background:linear-gradient(180deg, #130525 0%,rgba(105, 57, 153, 0.3) 100%);
        transform:rotate(-180deg);
    }

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

export const FormContainer = styled.div`
    width:55%;

    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;

    form{
        width:40%;
    }

    h2{
        color:${ props => props.theme.colors.darkPurple };
        font-weight:normal;
        font-size:40px;
        line-height:48px;
    }

    p{
        color:${ props => props.theme.colors.lightPurple };
        font-weight:600;
        font-size:16px;
        line-height:20px;
        
        margin-top:20px;
        margin-bottom:50px;
    }

    div:not(:first-of-type){
        margin-top:20px;
    }

    button{
        margin-top:30px;
    }

    p:last-of-type{
        text-align:center;
        font-size:14px;
        font-weight:normal;

        margin-top:30px;
    }
`;

export const ForgotPasswordLink = styled(Link)`
    color:${ props => props.theme.colors.purple };
`;