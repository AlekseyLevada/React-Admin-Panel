import React from "react"

/**
 * Класс для генерирования компонента 'GoodItem' приложения 
 * props:
 * "ID": "e646b5f2-9c3e-4861-b1ea-eab4c4549b9d",
    "TITLE": "Куртка",
    "DISCR": "Куртка из натуральной кожи",
    "PRICE": "1200000",
    "IMG": "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/3~IAAOSwHqxbWwNV/$_57.JPG",
    "COUNT": "232"
 */

class GoodItem extends React.Component {
    constructor(){
        super()
    }
    render() {
        const {data} = this.props
        //console.log(data)
        return(
                <div className="container__card">
                    <div className="card">
                        <h3>Карточка товара</h3>
                        <h4>{data.TITLE}</h4>
                        <img src={data.IMG}/>
                        <p>{data.DISCR}</p>
                        <p>{data.PRICE}</p>
                    </div>
                </div>
        )
    }
}

export default GoodItem