import Link from "next/link";
import { CardItem, Li, RoundedImages } from "../cards/cards.jsx";
import styled from "styled-components";

function Item(props) {
  const { name, icon, content, link } = props;
  const altText = `${name} profile picture`;
  if (link === undefined) {
    let links = "/editor/" + props.id;
    return (
      <CardItem>
        <RoundedImages src={icon} alt={altText}></RoundedImages>
        <h2>{name}</h2>
        <p>{content}</p>
        <div>
          <div>
            <Link href={links} target="_blank">
              <Li>Go to item page</Li>
            </Link>
          </div>
        </div>
      </CardItem>
    );
  } else {
    return (
      <CardItem>
        <RoundedImages src={icon} alt={altText}></RoundedImages>
        <h2>{name}</h2>
        <p>{content}</p>
        <div>
          <div>
            <Link href={link} target="_blank">
              <Li>Go to item page</Li>
            </Link>
          </div>
        </div>
      </CardItem>
    );
  }
}

export default Item;
