import styled from "styled-components";

const InventoryComponentStyled = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  width: 70%;
  padding: 30px;
  margin-left: 15%;
  ovberflow: hidden;
  justify-content: space-between;

  img {
    width: 400px;
    height: 200px;
  }

  .vehicle-name {
    font-size: 40px;
    margin-left: 30px;
  }

  .car-details-div {
    overflow: auto;
    margin-right: 15%;
  }

  .car-name-image-div {
    display: flex;
    flex-direction: row;
  }

  .car-price-div {
    margin-right: 15%;
    font-size: 40px;
  }

  .car-stats-div {
    Button {
      margin-right: 10px;
      height: 50px;
      width: 150px;
    }
    margin-top: 10%;
  }
`;
export default InventoryComponentStyled;
