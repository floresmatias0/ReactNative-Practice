import { useState } from "react";

export const Counter = () => {

    // Para este caso el tipo se declara de forma diferente: <"tipo de dato"> en caso de ser necesario
    const [value, setValue] = useState<number>(0);

    const acc = (num :number) => {
        setValue( value + num );
    };

  return (
    <>
        <h3>Counter <small>{value}</small></h3>
        <button 
            className="btn btn-primary mx-2"
            onClick={() => acc(1)}
        > 
            +1
        </button>
        <button
            className="btn btn-primary mx-2"
            onClick={() => acc(-1)}
        >
            -1
        </button>
    </>
  )
};
