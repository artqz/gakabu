console.log(cowsay.say({ text: 'Welcome to GaKaBu!' }));
import Head from 'next/head'
import cowsay from 'cowsay-browser'

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
  </div>
)
