import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basketContext'

function BasketCard() {
    const { removeBasket, increaseCount, decreaseCount, basket } = useContext(BasketContext)

    return (
        <div>
            <div className="basketCard">

                <div className="basketelement">
                    {/* {console.log(basket)} */}
                    {basket.map((x) => (
                        <ul>
                            <li>{ }</li>
                            <li>{x.price}</li>
                            <li><button onClick={() => removeBasket(x)}>remove</button></li>
                            <li><button onClick={() => increaseCount(x)}>+</button></li>
                            {/* <p>{x.count}</p> */}
                            ``                            <li onClick={() => decreaseCount(x)}><button>-</button></li>
                        </ul>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default BasketCard