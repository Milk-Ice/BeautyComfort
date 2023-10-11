import styled from "styled-components";
export const HeaderCenterWrapper = styled.div`
.search-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    padding: 0 9px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;

    ${props => props.theme.mixins.boxShadow}
    .text{
        padding: 0 16px;
        font-weight: bold;
    }
}
    
`