import Head from 'next/head'
const FacetHead = () => <Head>
  <script src="https://api.facet.run/js?id=DOMAIN~OTU2ODRlZmMtMzg3Ni00N2NlLTkyZmUtYTg4NTU0ZGQyMTdi"></script>    {/* google analytics */}

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-LKCVL1Y70Q"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LKCVL1Y70Q');
      `,
  }}
  />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Facet</title>
  <link rel="icon" href="/favicon.ico" />
</Head >;

export default FacetHead;
