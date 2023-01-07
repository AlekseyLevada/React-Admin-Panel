import './style.css'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Loader } from '../loader'

import goodsJSON from '../../stub/goods.json'




export function GoodDetail() {

    const [good, setGood] = useState(null)
    const [goods, setGoods] = useState(goodsJSON)
    const { id } = useParams()

    const saveForm = React.createRef()

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setTimeout(() => {
            const detailedGood = goods.find(el => el.ID == id)
            setGood(detailedGood)
        }, 1000)
    }, [])

    /**Метод сохранения товара после редактирования */

    const saveGood = (e) => {
        const nativeForm = saveForm.current
        const formData = new FormData(nativeForm)

        const title = formData.get('TITLE')
        const discr = formData.get('DISCR')
        const price = formData.get('PRICE')
        const count = formData.get('COUNT')

        const img = formData.get('IMG')
        const file = formData.get('FILE')

        goods.find((el, index) => {
            if (el.ID === id) {
                goods[index].TITLE = title
                goods[index].DISCR = discr
                goods[index].PRICE = price
                goods[index].COUNT = count

                navigate('/goods', {
                    state: {
                        goods: goods
                    }
                })
            }
            e.preventDefault()
        })
    }

    if (!good) {
        return <Loader />
    }

    return (
        <div className='container__good_detail'>
            <div className='container__good_detail_card'>
                <div className='container__good_info'>
                    <img src={good.IMG} />
                    <Link to='/goods'>
                        <button type='submit'>Назад к списку товаров</button>
                    </Link>
                </div>
                <div className='container__good_detail_form'>
                    <form ref={saveForm} encType='multipart/form-data'>
                        <p>Название товара</p>
                        <input type='text' defaultValue={good.TITLE} name='TITLE' />
                        <p>Описание товара</p>
                        <textarea type='text' defaultValue={good.DISCR} name='DISCR' cols={37} rows={5}></textarea>
                        <p>Цена</p>
                        <input type='text' defaultValue={good.PRICE} name='PRICE' />
                        <p>Колличество</p>
                        <input type='text' defaultValue={good.COUNT} name='COUNT' />

                        <input type='file' name='FILE' />
                        <button type='submit' onClick={(e) => saveGood(e)}>Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}