import '../styles/globals.scss';
import '../styles/components/Header.scss';
import '../styles/components/Footer.scss';
import { Shantell_Sans } from '@next/font/google';
import ContainerMain from '../layouts/container-main';
const shantell_Sans = Shantell_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})
export default function App({ Component, pageProps }) {
  return (
    <main className={shantell_Sans.className}>
      <ContainerMain>
        <Component { ...pageProps } />
      </ContainerMain>
    </main>
  )
}

