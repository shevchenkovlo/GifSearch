import React, { useState, useEffect } from 'react';


const useDebounce = (value:string, delay:number) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

   React.useEffect(()=>{
       const handler = setTimeout(()=>{
           setDebouncedValue(value);
       },delay);
       return () => {
           clearTimeout(handler);
       }
   },[value]
   );

    return debouncedValue;
}

export default useDebounce;