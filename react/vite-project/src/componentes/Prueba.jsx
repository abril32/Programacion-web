export function Prueba({nombre, apellido}){
    const products = [
        { title: 'Col', id: 1, description: "1kg de col 320" },
        { title: 'Ajo', id: 2, description: "3 cabezas de ajo 450"},
        { title: 'Manzana', id: 3, description: "1kg de manzana 400" },
      ];
    return(
        <>
        <h1>
            hola {nombre} {apellido}
        </h1>
        {
            products.map((producto, i) => {
                return (
                    <Card>
                        <Card.Body>
                            <div key={producto.id} className="color">
                            <Card.Title >Title: {producto.title}</Card.Title>
                            <Card.Text>{producto.description}</Card.Text>
                            </div> 
                        </Card.Body>
                    </Card>
                )
            })
        }
        </>
    )
};
