import styled, { keyframes } from 'styled-components';

const FadeInRight = keyframes`
    from{
        right: -80px;
        opacity: 0;
    } to{
        right: 30px;
        opacity: 1;
    }
`

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    padding:40px 30px;
    position:absolute;
    top: 0;
    left: 0;
    z-index: 30;
    overflow: hidden;
    display:flex;
    justify-content:flex-end;
`;

export const Container = styled.div`
    width:350px;
    height:70px;
    position:absolute;
    background-color:${props => props.theme.colors.green};
    border-top-left-radius:7px;
    border-top-right-radius:7px;
    border-bottom-right-radius:7px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    animation: ${FadeInRight} .6s;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    .message{
        margin-left:20px;
    }
    p{
        color:${props => props.theme.colors.white};
        margin-left:10px;
    }
`;

export const ProgressBar = styled.div`
    width:${props => `${props.width}%`};
    height:5px;
    
    position:absolute;
    bottom:0;
    background-color:rgba(255, 255, 255, 0.75);
    border-radius: 0 4px 4px 0;
    transition:width .1s;
`;