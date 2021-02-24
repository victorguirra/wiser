import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;

        font-family:'Montserrat', sans-serif;
    }

    input, button{
        outline:none;
    }
    
    button{
        cursor:pointer;
    }
`;