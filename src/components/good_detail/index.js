import './style.css'
import React from 'react'
import goodsJSON from '../../stub/goods.json'

export default class GoodDetail extends React.Component {
    constructor() {
        super()
    }

    render() {
        const goodID = window.location.pathname.replace('/goods/', '')
        const good = goodsJSON.find(element => element.ID === goodID)
        return (
            <>
                <h1>{good.TITLE}</h1>
                <img src={good.IMG}/>
                <form>
                    <input type='text' placeholder='Название товара' value={good.TITLE} name='TITLE'/>
                    <input type='text' placeholder='Описание товара' value={good.DISCR} name='DISCR'/>
                    <input type='text' placeholder='Цена' value={good.PRICE} name='PRICE'/>
                    <input type='text' placeholder='Количество' value={good.COUNT} name='COUNT'/>
                    <input type='file' placeholder='Изображение товара'/>
                    <input type='submit' value='Сохранить'/>
                </form>
            </>
        )
    }
}