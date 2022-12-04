import React from 'react'
import goodsJSON from '../../stub/goods.json'
import GoodItem from '../../components/gooditem'
import './style.css'

/**
 * Класс для генерирования страницы приложения 'Товары'
 */

class Goods extends React.Component {
    constructor() {
        super()
        this.state = {
            goods: goodsJSON,
            value: '',
            
        }
    }

    findGood(event) {
        event.preventDefault()
        this.setState({
            value:event.target.value,
            goods: []
        })
    }

    render() {
        //console.log(goodsJSON)
        return (
            <div className='container__goods'>
                <h1>Товары</h1>
                <form className='container__goods_form'>
                    <input type='text' placeholder="Введите название товара" value={this.state.value} onChange={this.findGood}/>
                    <input type='submit' value='Поиск' onClick={(event) => {this.findGood(event)}}/>
                </form>
                <div className='container__card'>
                    {
                        this.state.goods.map(element => {
                            return <GoodItem key={element.ID} data={element} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Goods