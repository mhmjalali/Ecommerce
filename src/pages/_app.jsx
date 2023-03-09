import '../style/global.scss';
import '../style/component/header.scss';
import '../style/component/footer.scss';
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

