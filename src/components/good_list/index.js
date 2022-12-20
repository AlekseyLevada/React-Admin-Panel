import './style.css'
import React, { useState, useEffect } from 'react'

import goodsJSON from '../../stub/goods.json'
import {GoodItem} from '../../components/good_item/index.js'
import { Loader } from '../../components/loader/index.js'


/**
 * Компонент списка карточек
 */

export function GoodList(props) {

    const [goods, setGoods] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentCount, setCurrentCount] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setGoods(goodsJSON)
            setIsLoading(false)
        }, 1000);
    }, [])

    const findGood = (e) => {
        e.preventDefault()
        goods.find(element => {
            if (e.target.value.toLowerCase() === element.DISCR.toLowerCase() || e.target.value.toLowerCase() === element.TITLE.toLowerCase()) {
                setGoods([element])
            }
            else if (e.target.value.toLowerCase() === '' || e.target.value.toLowerCase() === null) {
                setGoods(goodsJSON)
            }
        })
    }

    const deleteGood = (e,id) => {
        e.preventDefault()
        const newFilteredGoods = goods.filter(element =>
            element.ID !== id
        )
        setGoods(newFilteredGoods)
    }

    const deleteCurrentGood = (e) => {
        e.preventDefault()
    }

    if (isLoading == true) {
        return <><Loader /></>
    }

    return (
        <div className='container__goods'>
            <h2>
                Товары
            </h2>
            <form className='container__goods_form'>
                <input type='text' placeholder="Поиск товара" onChange={findGood} />
                <button onClick={deleteCurrentGood}>Удалить...{currentCount.length} товаров</button>
            </form>
            <div className='container__card'>
                {
                    goods.map((element) => {
                        return <GoodItem key={element.ID} data={element} deleteGood={deleteGood} currentCount={currentCount} setCurrentCount={setCurrentCount} />
                    })
                }
            </div>
        </div>
    )
}