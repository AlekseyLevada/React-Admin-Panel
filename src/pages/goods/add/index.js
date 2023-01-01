import React, { createRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import goodsJSON from '../../../stub/goods.json'

export function AddGood() {

    const formAdd = createRef()
    const navigate = useNavigate()

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
        navigate('/goods', {
            state: {
                goods: goodsJSON
            }
        })
        console.log(formData)
    }

    return (
        <div className='form_add'>
            <h2>Форма для добавления товара</h2>
            <form ref={formAdd} encType='multipart/form-data'>
                <input type='text' name='title' placeholder='Название товара' />
                <input type='text' name='discr' placeholder='Описание' />
                <input type='text' name='count' placeholder='Цена' />
                <input type='text' name='price' placeholder='Колличество' />
                <button type='submit' onClick={(e) => addGood(e)}>Добавить</button>
            </form>
        </div>
    )
}