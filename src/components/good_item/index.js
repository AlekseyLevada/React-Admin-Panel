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

    setCurrent(e) {
        const { selected, setSelected, data } = this.props
        const operation = e.target.checked === true ? '+' : '-'

        if (e.target.checked) {
            this.setState({
                currentForDel: true
            })
            selected.push(data)
            setSelected(
                [...selected]
            )
        }
        else {
            this.setState({
                currentForDel: false
            })
            const currentDelGood = data.ID

            const newListGood = selected.filter(el => el.ID !== currentDelGood)
            setSelected(newListGood)
        }
    }


    render() {
        const { data, deleteGood } = this.props
        const currentClassName = `card ${this.state.currentForDel ? 'del' : ''}`
        return (
            <div className={currentClassName}>
                <div className="title__container">
                    <h3>{data.TITLE}</h3>
                    <input type='checkbox' onClick={(e) => this.setCurrent(e)} />
                </div>
                
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
                    {/* <button onClick={() => this.setCurrent('+')}>+</button>
                    <button onClick={() => this.setCurrent('-')}>-</button> */}
                </div>
            </div>
        )
    }
}






// export function GoodItem(props) {

//     const {data, deleteGood, selected, setSelected} = props

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