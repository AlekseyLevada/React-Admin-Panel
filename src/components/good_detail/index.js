import './style.css'
import React from 'react'
import goodsJSON from '../../stub/goods.json'
import { Link } from 'react-router-dom'
import { Button } from '../buttons'

const saveForm = React.createRef()

export default class GoodDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            goods: goodsJSON,
        }
    }

    render() {
        const goodID = window.location.pathname.replace('/goods/', '')
        const good = this.state.goods.find(element => element.ID === goodID)
        return (
            <div className='container__good_detail'>
                <div className='container__detail_card'>
                    <div className='container__info'>
                        <img src={good.IMG} />
                        <Link to='/goods'><Button value='Назад' /></Link>
                    </div>
                    <div className='container__form'>
                        <form ref={saveForm} encType='multipart/form-data'>
                            <input type='text' defaultValue={good.TITLE} name='TITLE' />
                            <input type='text' defaultValue={good.DISCR} name='DISCR' />
                            <input type='text' defaultValue={good.PRICE} name='PRICE' />
                            <input type='text' defaultValue={good.COUNT} name='COUNT' />
                            <input type='file' name='FILE' />
                            <input type='submit' value='Сохранить' onClick={(e) => this.saveGood(e)} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    saveGood(e) {
        e.preventDefault()
        const nativeForm = saveForm.current
        const formData = new FormData(nativeForm)
        const file = formData.get('FILE')
        console.log(file)
    }
}