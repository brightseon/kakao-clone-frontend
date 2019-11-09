import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${ reset };

    body {
        width: 100%;
        height: 100vh;
        background-color: ${ props => props.theme.bgColor };
    }

    * {
        box-sizing: border-box;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;