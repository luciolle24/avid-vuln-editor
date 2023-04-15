import Link from "next/link";
import { CardItem, Li, RoundedImages } from "../cards/cards.jsx";
import styled from "styled-components";

function Editor(props) {
  const { data, id } = props;
  return (
    <CardItem>
      <RoundedImages
        src="https://avidml.org/uploads/avid-logo.png"
        alt="AVID Logo"
      ></RoundedImages>
      <h2>{data.id.description.value}</h2>
    </CardItem>
  );
}
export default Editor;
