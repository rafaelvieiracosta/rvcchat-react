function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function MyApp({ Component, pageProps }) {
    return( 
    <>
    <GlobalStyle />
    <ScrollBar />
    <Head/>
    <Component {...pageProps} /> 
    </> 
    );
  }

  function ScrollBar() {
    return (
      <style global jsx>{`
      *::-webkit-scrollbar-track {
        background-color: #E6EAF0;
        border-radius: 10px;
      }
      *::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
      }
      *::-webkit-scrollbar-thumb {
        background: #CED3D9;
        border:2px solid #E6EAF0;
      }
      `}</style>
    );
  }

  function Head() {
    return (
      <head>
        <link rel="shortcut icon" href="../src/img/fav.svg"
        type="image/svg+xml"></link>
        <title>rvcchat</title>
      </head>
    );
  }