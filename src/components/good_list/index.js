import './style.css'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import goodsJSON from '../../stub/goods.json'
import {GoodItem} from '../../components/good_item/index.js'
import { Loader } from '../../components/loader/index.js'


/**
 * Компонент списка карточек
 */

export function GoodList() {

    const [isLoading, setIsLoading] = useState(true)
    const [goods, setGoods] = useState([])
    const [selected, setSelected] = useState([])

    const location = useLocation()
    const navigate = useNavigate()

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

    const deleteGood = (e, id) => {
        e.preventDefault()
        const newFilteredGoods = goods.filter(element => element.ID !== id)
        setGoods(newFilteredGoods)
    }

    const deleteCurrentGood = (e) => {
        e.preventDefault()
        const currentGoods = goods
        for (let i = currentGoods.length - 1; i >= 0; i--) {
            for (let k = 0; k < selected.length; k++) {
                if (currentGoods[i] && currentGoods[i].ID === selected[k].ID) {
                    currentGoods.splice(i, 1)
                }
            }
        }
        setSelected([])
        setGoods([...currentGoods])
    }

    useEffect(() => {
        setTimeout(() => {
            setGoods(goodsJSON)
            setIsLoading(false)
        }, 1500)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='container__goods'>
            <h2>
                Товары
            </h2>
            <form className='container__goods_form'>
                <input type='text' placeholder="Поиск товара" onChange={findGood} />
                <button onClick={deleteCurrentGood}>Удалить...{selected.length} товаров</button>
                <button onClick={() => navigate('/goods/add')}>Добавить товар</button>
            </form>
            <div className='container__card'>
                {
                    goods.map((element) => {
                        return <GoodItem key={element.ID} data={element} deleteGood={deleteGood} selected={selected} setSelected={setSelected}/>
                    })
                }
            </div>
        </div>
    )
}