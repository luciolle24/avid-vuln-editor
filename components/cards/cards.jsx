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

export const Textarea = styled.textarea`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
  background-color: ${theme.colors.darkGrey};
  width: 100%;
  min-width: 300px;
  height: 100%;
  min-height: 80px;
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

export const Button = styled.button`
  background-color: #3dd1e7;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
