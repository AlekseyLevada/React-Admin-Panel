import React, { useState, useEffect } from "react"
import './style.css'

import { Button } from '../buttons/index.js'
import { Link } from 'react-router-dom'


export function GoodItem(props) {

    const { data, deleteGood, selected, setSelected } = props
    const [selectedForDel, setSelectedForDel] = useState(false)
    const currentClassName = `card ${selectedForDel ? 'del' : ''}`

    const setCurrent = (e) => {
        if (e.target.checked) {
            setSelectedForDel(true)
            selected.push(data)
            setSelected([...selected])
        }
        else {
            setSelectedForDel(false)
            const currentDelGood = data.ID
            const newListGood = selected.filter(el => el.ID !== currentDelGood)
            setSelected(newListGood)
        }
    }

    return (
        <div className={currentClassName}>
            <div className="title__container">
                <h3>{data.TITLE}</h3>
                <input type='checkbox' onClick={(e) => setCurrent(e)} />
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
        </div>
    )
}