import './style.css'
import React, { useState } from "react"
import { Link } from 'react-router-dom'


export function GoodItem(props) {

    const { data, deleteGood, selected, setSelected } = props
    const [selectedForDel, setSelectedForDel] = useState(false)

    const currentClassName = `good__card ${selectedForDel ? 'del' : ''}`
    const disabledIfChecked = `${selectedForDel ? 'disabled' : ''}`

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
            <div className='good__card-logo'>
                <img src={data.IMG} />
            </div>
            <div className='good__card-title'>
                <h4>{data.DISCR}</h4>
            </div>
            <div className='good__card-price'>
                <p>{data.PRICE}</p>
            </div>



            <Link to={`/goods/${data.ID}`}>
                <button>Редактировать</button>
            </Link>

            <Link>
                <button onClick={(e) => deleteGood(e, data.ID)} disabled={disabledIfChecked}>
                    Удалить
                </button>
            </Link>
        </div>
    )
}