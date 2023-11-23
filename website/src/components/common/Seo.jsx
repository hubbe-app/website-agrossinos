import Head from "next/head";

const Seo = ({ pageObject, globalSettings }) => (
  <>
    <Head>
      <title>
        { globalSettings?.default_page_title }
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
