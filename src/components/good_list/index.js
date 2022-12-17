import './style.css'
import React from 'react'
import goodsJSON from '../../stub/goods.json'
import GoodItem from '../../components/good_item/index.js'
import { Loader } from '../../components/loader/index.js'


/**
 * Компонент списка карточек
 */

export default class GoodList extends React.Component {
    constructor() {
        super()
        this.state = {
            goods: goodsJSON,
            isLoading: true,
        }
        // Привязка контекста класса к методу
        // this.deleteGood = this.deleteGood.bind(this)
    }

    render() {
        // Вывод лоадера перед загрузкой
        if (this.state.isLoading == true) {
            return <><Loader/></>
        }
        return (
            <div className='container__goods'>
                <h2>
                    Товары
                </h2>
                <form className='container__goods_form'>
                    <input type='text' placeholder="Поиск товара" onChange={(e) => this.findGood(e)} />
                    {/* <input type='submit' value='Найти' onClick={(e) => this.catchInputValue(e)} /> */}
                </form>
                <div className='container__card'>
                    {
                        this.state.goods.map((element) => {
                            return <GoodItem key={element.ID} data={element} deleteGood={this.deleteGood} context={this}/>
                        })
                    }
                </div>
            </div>
        )
    }

    findGood(e) {
        e.preventDefault()
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

    deleteGood(e, id, context) {
        e.preventDefault()
        const newFilteredGoods = context.state.goods.filter(element =>
            element.ID !== id
        )
        context.setState({
            goods: newFilteredGoods
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                goods:goodsJSON,
                isLoading:false,
            })
        }, 3000);
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
     * По оффициальной документации не рекомендуют использовать рефы для данных манипуляций с инпутами
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