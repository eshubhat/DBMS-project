import Typewriter from 'typewriter-effect';
import { usePathname } from 'next/navigation';

export default function TypewriterEffect({text} : {text:string}){
    const pathname = usePathname();
    if(pathname === '/'){
    return <div >
        <Typewriter 
        options={{
      strings: [`${text}`],
      autoStart:true,
      cursor:'',
      deleteSpeed: 10000000

    }}
  />

    </div>
    
    }   

    else{
        return `$text`;
    }


}