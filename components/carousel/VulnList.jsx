import Item from "./Item";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";
import { mediaQueriesDesktopFirst } from "@/styles/utils";

export const WrappCardsWraperer = styled.div`
  margin: 10% 39%;
  ${{
    [mediaQueriesDesktopFirst.xs]: {
      margin: "0% 0%",
    },
  }};
`;

function VulnaList(props) {
  const { items } = props;

  return (
    <WrappCardsWraperer>
      <Carousel navButtonsAlwaysVisible>
        {items &&
          items.map((event) => (
            <Item
              key={event.id}
              id={event.id}
              name={event.description.value}
              icon="https://www.vuln.co.il/wp-content/uploads/2020/09/Group-1.png"
            />
          ))}
      </Carousel>
    </WrappCardsWraperer>
  );
}

export default VulnaList;
