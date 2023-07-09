import styled from 'styled-components';
import { 
    Menu
} from 'antd';

export const DivHeader = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10%;
    margin-right: 10%;
    width: 100%;
    border-bottom: 1px solid red;
    display: flex;
    flex-direction: row;
`;

export const StyledMenu = styled(Menu)`
    margin-top: auto;
    margin-bottom: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 11px;
    color: #fff;
    border-bottom: 0px solid transparent !important;

    .ant-btn-icon{
        margin-top: 10px;
    }
`