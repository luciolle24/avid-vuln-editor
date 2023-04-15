import { VulnList } from "@/data/vulns/vuln_list";
import { CardItem, Li } from "@/components/cards/cards";
import Head from "next/head";
import { useRouter } from "next/router";
import Editor from "@/components/editor/editor";
export default function Home({ data }) {
  const { pathname } = useRouter();
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
      <div style={{ margin: "2% 20%" }}>
        <Editor data={data} id={pathname} />
      </div>
    </>
  );
}

export function getStaticProps() {
  return { props: { data: VulnList } };
}

export async function getStaticPaths() {
  return {
    paths: ["/editor/1"],
    fallback: true,
  };
}
