import { CardItem, Li } from "@/components/cards/cards";
import Head from "next/head";
import ItemList from "@/components/carousel/ItemList";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Vulnerability</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div style={{ margin: "2% 20%" }}>
        <CardItem>
          <h1>Welcome to our FAQ</h1>
        </CardItem>
      </div>
      <ItemList items={data} />
    </>
  );
}

export function getStaticProps() {
  return { props: { data: FAQ } };
}
