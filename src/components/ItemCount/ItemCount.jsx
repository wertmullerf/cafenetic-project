import React, { useState } from 'react';
import './ItemCount.css'
import Titles from '../Titles/Titles'
function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial)
    const sum = () => contador < stock ? setContador(contador + 1) : alert('No hay stock disponible')
    const substract = () => contador > initial ? setContador(contador - 1) : alert('No puedes sacar mas productos')
    const reset = ()=> setContador(initial) 
    return (
        <>
            <div className="product">
                <Titles
                    title={'Producto 1'}
                />
                <span>{contador}</span>
                <button onClick={substract}>-</button>
                <button onClick={sum}>+</button>
                <button className = "btn btn-danger" onClick={reset}>Reiniciar</button>
                <button className = "btn btn-success"onClick={() =>{onAdd(contador); reset()}}>Agregar al carrito</button>
            </div>
        </>
        
  )
}

export default ItemCount