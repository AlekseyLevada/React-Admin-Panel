import goodsJSON from '../../../stub/goods.json'
import React, { createRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

export function AddGood() {

    const formAdd = createRef()
    const navigate = useNavigate()

    useEffect(() => {

    }, [])

    const addGood = (e) => {
        e.preventDefault()
        const formData = new FormData(formAdd.current)
        const title = formData.get('title')
        const discr = formData.get('discr')
        const count = formData.get('count')
        const price = formData.get('price')
        const objectAdd = {
            'ID': Math.random(),
            'TITLE': title,
            'DISCR': discr,
            'PRICE': price,
            'COUNT': count,
            'IMG': null,
        }
        goodsJSON.push(objectAdd)
        //console.log(goodsJSON)
        navigate('/goods', {
            state : {
                goods: goodsJSON
            }
        })
    }

    return (
        <div className='form_add'>
            <h2>Форма для добавления товара</h2>
            <form ref={formAdd} encType='multipart/form-data'>
                <input type='text' name='title' placeholder='Название товара' />
                <input type='text' name='discr' placeholder='Описание' />
                <input type='text' name='count' placeholder='Цена' />
                <input type='text' name='price' placeholder='Колличество' />
                <input type='submit' onClick={(e) => addGood(e)} placeholder='Колличество' value='Добавить' />
            </form>
        </div>
    )
}