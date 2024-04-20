import Appbar from '@/components/appbar';
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Image from 'next/image'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Appbar></Appbar>
       <div style={{
        zIndex:-1,
        position:"fixed",
        width:'100vw',
        height: '100vh'
      }}>
        <Image
          src="/bgImage.png"
          alt='Pharma logo'
          fill
          style={{objectFit:'cover'}}
          blurDataURL='/pharmabg.png'
        /> 

        
      
      <Component {...pageProps} />
      </div>
    </RecoilRoot>

  );
}
