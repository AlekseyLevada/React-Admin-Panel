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
                    <p><input type='text' placeholder='Название товара' value={good.TITLE} name='TITLE'/></p>
                    <p><input type='text' placeholder='Описание товара' value={good.DISCR} name='DISCR'/></p>
                    <p><input type='text' placeholder='Цена' value={good.PRICE} name='PRICE'/></p>
                    <p><input type='text' placeholder='Количество' value={good.COUNT} name='COUNT'/></p>
                    <p><input type='file' placeholder='Изображение товара'/></p>
                    <p><input type='submit' value='Сохранить'/></p>
                </form>
            </>
        )
    }
}