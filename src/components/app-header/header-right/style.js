import styled from "styled-components";
export const HeaderRightWrapper = styled.div`
.right{
    display: flex;
    align-items: center;
    color: ${props => props.theme.text.primaryColor};
    .item{
        padding: 10px;
    }
  .btns{
    display: flex;
    align-items: center;
    margin-right: 20px;
  }  
  .profile{
  
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 33px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;

   ${props => props.theme.mixins.boxShadow}
    
  }
}
`