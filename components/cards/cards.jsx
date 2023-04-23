import styled from "styled-components";
import { theme } from "../../styles/themes";
import { mediaQueriesDesktopFirst } from "../../styles/utils";

export const CardsWraper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      flexDirection: "column",
    },
  }}
`;
export const CardsWraperColumn = styled(CardsWraper)`
  flex-direction: column;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  min-width: 200px;
  background-color: ${theme.colors.darkGrey};
  color: white;
  box-shadow: ${theme.shadows.card};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const DesktopOnlyCardItem = styled(CardItem)`
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      display: "none",
    },
  }}
`;

export const RoundedImages = styled.img`
  border-radius: 100rem;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  float: center;
  background: white;
`;
export const Li = styled.li`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
`;

export const Input = styled.input`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
  background-color: ${theme.colors.darkGrey};
  width: 80%;
  height: 20px;
`;

export const Label = styled.label`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
  background-color: ${theme.colors.darkGrey};
  width: 80%;
  height: 20px;
`;
