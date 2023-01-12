import './style.css'
import React, { createRef, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import goodsJSON from '../../../stub/goods.json'
import { Loader } from '../../../components/loader/index.js'

export function AddGood() {
    const [isLoading, setIsLoading] = useState(true)
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
    }

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false)
        }, 1000)
    },[])

    if(isLoading) {
        return <Loader/>
    }

    return (
        <div className='container__goods_form_add'>
            <h2>Форма для добавления нового товара</h2>
            <form ref={formAdd} className='goods_form_add' encType='multipart/form-data'>
                <p>Название товара</p>
                <input type='text' name='title' placeholder='Название товара' />
                <p>Описание к товару</p>
                <textarea type='text' placeholder='Описание...' cols={100} rows={15} name='discr'></textarea>
                <p>Цена</p>
                <input type='text' name='price' placeholder='Цена' />
                <p>Колличество</p>
                <input type='text' name='count' placeholder='Колличество' />
                <div className='goods_form_add_buttons_block'>
                    <button onClick={(e) => addGood(e)}>Добавить</button>
                    <Link to='/goods'>
                        <button>Отмена</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}