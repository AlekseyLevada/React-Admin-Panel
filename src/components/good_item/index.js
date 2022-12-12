import React from "react"
import './style.css'
import Button from '../buttons/index.js'
import { Link } from 'react-router-dom'

/**
 * Класс для генерирования компонента 'GoodItem' 
 * props:
 * "ID": "e646b5f2-9c3e-4861-b1ea-eab4c4549b9d",
 * "TITLE": "Куртка",
 * "DISCR": "Куртка из натуральной кожи",
 * "PRICE": "1200000",
 * "IMG": "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/3~IAAOSwHqxbWwNV/$_57.JPG",
 * "COUNT": "232"
 */

class GoodItem extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { data } = this.props
        return (

            <div className="card">
                <h3>{data.TITLE}</h3>
                <img src={data.IMG} />
                <h4>{data.DISCR}</h4>
                <p>{data.PRICE}</p>
                <Link to={`/goods/${data.ID}`}>
                    <Button value='Подробнее'/>
                </Link>
            </div>

        )
    }
}

export default GoodItem