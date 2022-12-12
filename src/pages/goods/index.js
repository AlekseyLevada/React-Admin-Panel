import React from 'react'
import './style.css'
import goodsJSON from '../../stub/goods.json'
import GoodItem from '../../components/good_item/index.js'

/**
 * Класс для генерирования страницы приложения 'Товары'
 */

export default class Goods extends React.Component {
    constructor() {
        super()
        this.state = {
            goods: goodsJSON,
            // filteredGoods: null,
        }
    }

    findGood(e) {
        this.state.goods.find(element => {
                if (e.target.value.toLowerCase() === element.DISCR.toLowerCase() || e.target.value.toLowerCase() === element.TITLE.toLowerCase()) {
                    this.setState({
                        goods: [element]
                    })
                }
            else if (e.target.value.toLowerCase() === '' || e.target.value.toLowerCase() === null) {
                this.setState({
                    goods: goodsJSON
                })
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
                    <input type='text' placeholder="Поиск товара" onChange={(e) => this.findGood(e)} />
                    {/* <input type='submit' value='Найти' onClick={(e) => this.catchInputValue(e)} /> */}
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

    /** Для использования даного метода необходимо добаить в стейт переменную goodsInputValue: null, и повесить на кнопку 
     * onClick={(e) => this.catchInputValue(e)}
     * 
    catchInputValue(e) {
        e.preventDefault()
        this.state.goodsInputValue = e.nativeEvent.path[1][0].value
        console.log(this.state.goodsInputValue)
        this.state.goods.find( element => {
            console.log(element)
            if (element.TITLE.toLowerCase() === this.state.goodsInputValue || element.DISCR.toLowerCase() === this.state.goodsInputValue.toLowerCase()) {
                this.setState({
                    goods: [element]
                })
            }
            else if (e.nativeEvent.path[1][0].value.toLowerCase() === '' || e.nativeEvent.path[1][0].value.toLowerCase() === null) {
                this.setState({
                    goods: goodsJSON
                })
            }
        })
    }*/

    /** 
     * Для работы данного метода необходимо завести переменную глобально или в конструкторе 
     * const inputSearchRef = React.createRef()
     * ref={inputSearchRef} прописать для нужного инпута
     * // const goods = this.state.filteredGoods || this.state.goods прописать в render перед template
     * 
     * findGood(e) {
        e.preventDefault()
        const valueFromInputSearchInput = inputSearchRef?.current?.value
        console.log(valueFromInputSearchInput)
        const searchElement = this.state.goods.find(element => {
            return element.TITLE.toLocaleLowerCase() == valueFromInputSearchInput.toLowerCase() || element.DISCR.toLocaleLowerCase() == valueFromInputSearchInput.toLowerCase()
        })

        if (searchElement == '' || searchElement == undefined) {
            this.setState({
                goods: goodsJSON
            })
        } else {
            this.setState({
                filteredGoods: [searchElement]
            })
        }
    }
    */
}