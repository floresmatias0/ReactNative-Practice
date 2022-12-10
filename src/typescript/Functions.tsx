
export const Functions = () => {
    
    // Es necesario declarar que tipo de valor necesitamos retornar
    // A su vez los parametros que va a recibir dicha funcion tambien necesitan estar declarados sino por defecto los toma como any
    const suma = ( a:number, b:number ):number => { 
        return a + b;
    }
  return (
    <>
        <h3>Functions</h3>
        <span>El resultado es {suma(10, 5)}</span>
    </>
  )
}
