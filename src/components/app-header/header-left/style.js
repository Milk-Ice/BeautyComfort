import styled from "styled-components";
export const HeaderLeftWrapper = styled.div`
    color: red;
    color: ${props => props.theme.color.primaryColor};
    .logo{
        margin-left: 24px;
        cursor: pointer;
    }
`