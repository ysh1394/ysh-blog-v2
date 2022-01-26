import Alert from './Alert';
import Footer from './Footer';
import Header from '@/components/common/Header';
import Head from 'next/head';
import Meta from '../meta';
import Container from './Container';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  headTitle?: string;
};

const Layout = ({ preview, children, headTitle }: Props) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
