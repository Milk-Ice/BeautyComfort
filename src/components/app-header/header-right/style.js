import styled from "styled-components";
export const HeaderRightWrapper = styled.div`
.right{
    display: flex;
    position: relative;
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
  .panel{
    position: absolute;
    width: 240px;
    top: 60px;
    right: 20px;
    border-radius: 10px;
    box-shadow: 0 0 2px 4px rgba(0,0,0,.1);
    .top, .bottom{
      padding: 10px 0px;
    }
      .item{
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
      }
      display: flex;
      flex-direction: column;
    }
    .top {
      border-bottom: 1px solid #ddd;
    }
}
`