import { VulnList } from "@/data/vulns/vuln_list";
import { CardItem, Li } from "@/components/cards/cards";
import Head from "next/head";
import VulnaList from "@/components/carousel/VulnList";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Editor</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div style={{ margin: "2% 20%" }}>
        <CardItem>
          <h1>Welcome to the Editor</h1>
        </CardItem>
      </div>
      <VulnaList items={data} />
    </>
  );
}

export function getStaticProps() {
  return { props: { data: VulnList } };
}
