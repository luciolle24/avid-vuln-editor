import {
  CardItem,
  CardsWraper,
  CardsWraperColumn,
  Li,
} from "@/components/cards/cards";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>AVID Backend</title>
        <meta name="description" content="AVID Baackend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <CardsWraper>
        <CardsWraperColumn>
          <CardItem>
            <h1> Welcome to the website</h1>
            <p>
              This website has been a project of mine for a very long time...
              Welcome to the madness
            </p>
          </CardItem>
        </CardsWraperColumn>
      </CardsWraper>
    </>
  );
}
