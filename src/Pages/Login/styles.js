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

    @media(max-width:649px){
        width:100%;
        height:100vh;

        &:after{
            width:100%;
        }
    }
`;

export const FormContainer = styled.div`
    width:55%;

    background-color:${ props => props.theme.colors.white };

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

    @media(min-width:1348px){        
        form{
            width:50%;
        }
    }

    @media(min-width:650px) and (max-width:1347px){
        form{
            width:80%;
        }
    }

    @media(max-width:649px){
        width:85%;
        height:45%;
        min-height:450px;

        position:absolute;
        
        bottom:0;
        top:0;
        left:0;
        right:0;    
        margin:auto;

        border-radius:10px;

        h2{
            font-size:24px;
            line-height:32px;
            text-align:center;
        }

        p{
            font-size:14px;
            text-align:center;
            margin-bottom:25px;

            br{
                display:none;
            }
        }

        form{
            width:90%;
            height:100%;
            position:relative;
            padding-top:25px;
        }

        button{
            width:60%;
            position:absolute;
            bottom:-20px;
            box-shadow:none;
            left:0;
            right:0;
            margin:0 auto;
        }

        p:last-of-type{
            color:${ props => props.theme.colors.white };

            position:absolute !important;
            bottom:-100px;
            text-align:center;
            left:0;
            right:0;
            margin:0 auto;
        }

    }
`;

export const ForgotPasswordLink = styled(Link)`
    color:${ props => props.theme.colors.purple };

    @media(max-width:649px){
        color:${ props => props.theme.colors.white };
    }
`;