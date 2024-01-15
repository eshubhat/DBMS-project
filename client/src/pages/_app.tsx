import Appbar from '@/components/appbar';
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Image from 'next/image'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Appbar></Appbar>
      <div style={{
        zIndex:0,
        position:"fixed",
        width:'100vw',
        height: '90vh'
      }}>
        <Image
          src="/pharmabg.png"
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
