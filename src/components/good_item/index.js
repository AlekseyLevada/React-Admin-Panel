import React, { useState, useEffect } from "react"
import './style.css'

import { Button } from '../buttons/index.js'
import { Link } from 'react-router-dom'

export default class GoodItem extends React.Component {
    constructor() {
        super()
        this.state = {
            currentForDel: false,
        }
    }

    setCurrent(operation) {
        const { currentCount, setCurrentCount, data } = this.props

        if (operation == '+') {
            this.setState({
                currentForDel: true
            })
            currentCount.push(data)
            setCurrentCount(
                [...currentCount]
            )
        }
        else {
            this.setState({
                currentForDel: false
            })
        }
    }

    render() {
        const { data, deleteGood } = this.props
        const currentClassName = `card ${this.state.currentForDel ? 'del' : ''}`
        return (
            <div className={currentClassName}>
                <h3>{data.TITLE}</h3>
                <img src={data.IMG} />
                <h4>{data.DISCR}</h4>
                <p>{data.PRICE}</p>

                <Link to={`/goods/${data.ID}`}>
                    <Button value='Редактировать' />
                </Link>

                <Link onClick={(e) => deleteGood(e, data.ID)}>
                    <Button value='Удалить' />
                </Link>
                <div className='card__del_block'>
                    <button onClick={() => this.setCurrent('+')}>  +  </button>
                    <button onClick={() => this.setCurrent('-')}>  -  </button>
                </div>
            </div>
        )
    }
}






// export function GoodItem(props) {

//     const {data, deleteGood, currentCount, setCurrentCount} = props

//     const [currentForDel, setCurrentForDel] = useState(false)
//     const currentClassName = `card ${currentForDel ? 'del' : ''}`

//     return (
//         <div className={currentClassName}>
//             <h3>{data.TITLE}</h3>
//             <img src={data.IMG} />
//             <h4>{data.DISCR}</h4>
//             <p>{data.PRICE}</p>

//             <Link to={`/goods/${data.ID}`}>
//                 <Button value='Редактировать' />
//             </Link>

//             <Link onClick={(e) => deleteGood(e, data.ID)}>
//                 <Button value='Удалить' />
//             </Link>
//             <div className='card__del_block'>
//                 <button>  +  </button>
//                 <button>  -  </button>
//             </div>
//         </div>
//     )
// }