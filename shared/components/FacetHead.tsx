import Head from 'next/head'
const FacetHead = () => <Head>
  <script src="https://api.facet.run/js?id=DOMAIN~OTU2ODRlZmMtMzg3Ni00N2NlLTkyZmUtYTg4NTU0ZGQyMTdi"></script>    {/* google analytics */}

  {/* HotJar */}
  <script dangerouslySetInnerHTML={{
    __html: `(function(h,o,t,j,a,r){
      h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings={hjid:2362799,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}} />

  {/* Google Analytics */}
  < script async src="https://www.googletagmanager.com/gtag/js?id=G-LKCVL1Y70Q" ></script>
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
