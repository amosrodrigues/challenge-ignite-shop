import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import { Container, Header } from '../styles/pages/app';
import Link from 'next/link';
import { Cart } from '../components/Cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false} passHref>
          <a>
            <Image src={logoImg} alt="" />
          </a>
        </Link>

        <Cart />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
