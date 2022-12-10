// type, class, interface los tres sirven para tipar objetos
// class: sirve para crear instancias y si tiene una representacion en javascript
// type y interface no existen en javascript
// interface son mas faciles de expandir que type

// como queremos que luzca nuestra persona creamos un interface con las reglas de validaciones
interface Person {
    name: string,
    years: number,
    // Esto no deberia de hacerse
    // address: { 
    //     country: string,
    //     cp: number
    // }
    address: Direccion // Forma correcta
}

interface Direccion {
    country: string,
    cp: number
}

// const person = new Person() Esto no es posible porque interface no sirve para crear instancias

export const LiteralObjects = () => {

    const person: Person = {
        name: 'Matias',
        years: 29,
        address: {
            country: 'Argentina',
            cp: 1849
        }
    }

  return (
    <>
        <h3>Literal objects</h3>
        {JSON.stringify(person, null, 2)}
    </>
  )
};
