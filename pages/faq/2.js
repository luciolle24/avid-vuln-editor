import { ArticleImage, ArticlesWrapper } from "@/components/articles/article";
import { CardItem, CardsWraper } from "@/components/cards/cards";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Li = styled.li`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <ArticlesWrapper>
        <CardItem>
          <h1></h1>
          <p></p>
        </CardItem>
      </ArticlesWrapper>
    </>
  );
}
