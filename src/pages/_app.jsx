import '@/styles/globals.scss';
import '@/styles/components/Header.scss';
import '@/styles/components/MyCV.scss';
import NextNProgress from 'nextjs-progressbar';
import { Shantell_Sans } from '@next/font/google';
import ContainerMain from '../layouts/container-main';

const shantell_Sans = Shantell_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })
export default function App({ Component, pageProps }) {
  return (
    <main className={shantell_Sans.className}>
      <NextNProgress color="rgba(192, 47, 119, 0.95)" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <ContainerMain>
        <Component { ...pageProps } />
      </ContainerMain>
    </main>
  )
}

