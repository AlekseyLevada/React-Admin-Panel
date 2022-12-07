import React from 'react'
import goodsJSON from '../../stub/goods.json'
import GoodItem from '../../components/GoodItem'
import './style.css'


/**
 * Класс для генерирования страницы приложения 'Товары'
 */

class Goods extends React.Component {
    constructor() {
        super()
        //this.searchValue = React.createRef() (для возврата значения из DOM узла прописываем атрибут ref={this.searchValue})
        this.state = {
            goods: goodsJSON,
            value: '',
        }
    }
    
    findGood(e) {
        this.setState({
            value: e.target.value,
        })
        this.state.goods.find(element => {
            if(element.TITLE === this.state.value){
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
                    <input type='text' placeholder="Название товара" value={this.state.value} onChange={(e) => this.findGood(e)}/>
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