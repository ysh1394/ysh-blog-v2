import Layout from '@/components/common/Layout';
import '@/styles/index.css';
import { AppProps } from 'next/app';

const App = ({
  Component,
  pageProps,
  headTitle = `ysh's Web Site`,
}: AppProps & { headTitle?: string }): JSX.Element => {
  return (
    <>
      <Layout headTitle={headTitle}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
