import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { 
    Menu,
    Drawer,
    Row,
    Col,
    Button
} from 'antd';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`

export const DivHeader = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    border-bottom: 1px solid #1DC0A9;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const StyledMenu = styled(Menu)`
    margin-top: auto;
    margin-bottom: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 10.5px;
    font-weight: 500;
    color: #fff;
    border-bottom: 0px solid transparent !important;

    .ant-btn-icon{
        margin-top: 10px;
    }

`
export const StyledDrawer = styled(Drawer)`
    background: #00406F;
    .ant-drawer-header.ant-drawer-header-close-only,
    .ant-drawer-body{
        background: #00406F;
    }
`;


export const DivTelaInicial = styled.div`
    height: 520px;
    padding: 150px 10% 20px 10%;
    margin: 0;
`;

export const DivTelaInicialCenter = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #fff;

    h1{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 23px;
        text-align: justify;
        font-family: 'Montserrat', sans-serif;
        line-height: 26.82px;
    }

    h2{
        text-align: justify !important;        
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 17.07px;
    }
`;

export const StyledRow = styled(Row)`
    margin: auto;
`

export const StyledCol = styled(Col)`
    margin: auto 0;
`


