
export const BasicTypes = () => {
    //Declaramos nombre y le asignamos un string por defecto TS no me va a dejar cambiar el valor por otro que no sea de tipo string
    // let nombre = 'Matias';
    //aca TS me marca el error y si acercamos el cursor va a decir que solo puede ser de tipo string
    // nombre = 123;

    //Declaramos la variable y le asignamos nostros el tipo que querramos
    //let nombre: string | number = 'Matias'; En este caso le decimos que puede ser de ambos valores string y numero se pueden agregar los tipos que necesitemos pero no es recomendable
    //nombre = 123; ahora aca no me va a marcar el error al asignarle un valor numerico

    let name: string = 'Matias';
    const years = 29; //las constantes no estan definidas para que su valor cambie por eso TS no remarca que tipo puede ser sino que remarca su valor
    const isActive: boolean = true;

    /* <-- asignar tipos de array --> */
    //const powers: string[] = [] array de strings 
    //const powers: boolean[] = [] array de booleanos
    //const powers: number[] = [] array de numeros
    //const powers: any[] = [] array de cualquier cosa

    const powers: string[] = ['Fly', 'Velocity', 'Thunder', 'X-Ray'];

    //powers.push(1); powers al ser declarado como string me remarca el error de que solo pueden ser insertados strings
    //powers.push('1234');
    //powers.push(true); powers al ser declarado como string me remarca el error que solo pueden ser insertados strings

  return (
    <>
        <h3>Basic types</h3>
        {name}, {years}, {isActive ? 'active' : 'disactive'}
        <br/>
        {powers.join(', ')}
    </>
  )
}
