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

function ItemList(props) {
    const { items } = props;

    return (
        <WrappCardsWraperer>
            <Carousel navButtonsAlwaysVisible>
                {items &&
                    items.map((event) => (
                        <Item
                            key={event.id}
                            id={event.id}
                            name={event.title}
                            icon={event.picture}
                            content={event.content}
                            link={event.link}
                        />
                    ))}
            </Carousel>
        </WrappCardsWraperer>
    );
}

export default ItemList;
