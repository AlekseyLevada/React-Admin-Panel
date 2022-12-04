import React from 'react'
import './style.css'
import goodsJSON from '../../stub/goods.json'
import GoodItem from '../../components/gooditem'

/**
 * Класс для генерирования страницы приложения 'Товары'
 */

class Goods extends React.Component {
    constructor() {
        super()
        this.state = {
            goodsJSON
        }
    }

    findGood(event) {
        console.log(event.currentTarget.value)
        this.setState({
            goodsJSON: []
        })
    }

    render() {
        //console.log(goodsJSON)
        return (
            <div className='container__goods'>
                <h1>Товары</h1>
                <form className='container__goods_form'>
                    <input type='text' placeholder="Введите название товара" />
                    <input type='submit' value='Поиск' onClick={(event) => { this.findGood(event) }} />
                </form>
                <div className='container__card'>
                    {
                        this.state.goodsJSON.map(element => {
                            return <GoodItem key={element.ID} data={element} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Goods