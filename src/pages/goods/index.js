import React from 'react'
import goodsJSON from '../../stub/goods.json'
import GoodItem from '../../components/goodItem/index.js'
import './style.css'


/**
 * Класс для генерирования страницы приложения 'Товары'
 */

class Goods extends React.Component {
    constructor() {
        super()
        this.state = {
            goods: goodsJSON,
        }
    }
    
    findGood(e) {
        //console.log(e.target.value)
        this.state.goods.find(element => {
            if(element.TITLE.toLowerCase() === e.target.value.toLowerCase()){
                console.log(element)
            }
        })
    }

    render() {
        return (
            <div className='container__goods'>
                <h1>
                    Товары
                </h1>

                <form className='container__goods_form'>
                    <input type='text' placeholder="Название товара" onChange={(e) => {this.findGood(e)}}/>
                    <input type='submit' value='Найти'/>
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