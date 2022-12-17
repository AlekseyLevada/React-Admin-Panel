import './style.css'
import React from 'react'
import goodsJSON from '../../stub/goods.json'

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
            <>
                <h1>{good.TITLE}</h1>
                <img src={good.IMG} />
                <form ref={saveForm} encType='multipart/form-data'>
                    <p><input type='text' defaultValue={good.TITLE} name='TITLE' /></p>
                    <p><input type='text' defaultValue={good.DISCR} name='DISCR' /></p>
                    <p><input type='text' defaultValue={good.PRICE} name='PRICE' /></p>
                    <p><input type='text' defaultValue={good.COUNT} name='COUNT' /></p>
                    <p><input type='file' name='FILE'/></p>
                    <p><input type='submit' value='Сохранить' onClick={ (e)=> this.saveGood(e)}/></p>
                </form>
            </>
        )
    }

    saveGood(e) {
        e.preventDefault()
        // console.log(saveForm.current)
        const nativeForm = saveForm.current
        const formData = new FormData(nativeForm)
        // const title = formData.get('TITLE')
        // console.log(title)
        const file =  formData.get('FILE')
        // console.log(file)
    }
}