import React from 'react'
import './style.css'
import goodsJSON from '../../stub/goods.json'
import GoodItem from '../../components/good_item/index.js'

/**
 * Класс для генерирования страницы приложения 'Товары'
 */

//const inputSearchRef = React.createRef()

class Goods extends React.Component {
    constructor() {
        super()
        this.state = {
            goods: goodsJSON,
            filteredGoods: null,
        }
    }

    findGood(e) {
        this.state.goods.find(element => {
            if (e.target.value.toLowerCase() === element.TITLE.toLowerCase()) {
                this.setState({
                    goods: [element]
                })
            }

            else if (e.target.value.toLowerCase() === '' || e.target.value.toLowerCase() === null){
                this.setState({
                    goods: goodsJSON
                })
            }
        })
    }

    // findGood(e) {
    //     e.preventDefault()
    //     const valueFromInputSearchInput = inputSearchRef?.current?.value
    //     console.log(valueFromInputSearchInput)
    //     const searchElement = this.state.goods.find(element => {
    //         return element.TITLE.toLocaleLowerCase() == valueFromInputSearchInput.toLowerCase() || element.DISCR.toLocaleLowerCase() == valueFromInputSearchInput.toLowerCase()
    //     })

    //     if (searchElement == '' || searchElement == undefined) {
    //         this.setState({
    //             goods: goodsJSON
    //         })
    //     } else {
    //         this.setState({
    //             filteredGoods: [searchElement]
    //         })
    //     }
    // }

    /**ref={inputSearchRef} */

    render() {
        // const goods = this.state.filteredGoods || this.state.goods
        return (
            <div className='container__goods'>
                <h1>
                    Товары
                </h1>

                <form className='container__goods_form'>
                    <input type='text' placeholder="Поиск товара" onChange={(e) => this.findGood(e)} />
                    {/* <input type='submit' value='Найти' onClick={(e) => this.findGood(e)} /> */}
                </form>

                <div className='container__card'>
                    {
                        this.state.goods.map((element) => {
                            return <GoodItem key={element.ID} data={element} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Goods