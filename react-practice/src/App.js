import {ButtonInc} from './Components/ButtonInc';
import { useEffect } from 'react';


export const App = () => {
    useEffect(() => {
      console.log('The component has been mounted')

      return () => {
        console.log('The component has been unmounted')
      }
    }, [])

    return (
      <>
        <ButtonInc/>
      </>
    )

  }




