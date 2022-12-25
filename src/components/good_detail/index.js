import './style.css'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation} from 'react-router-dom'

import goodsJSON from '../../stub/goods.json'
import { Link } from 'react-router-dom'
import { Button } from '../buttons'
import { Loader } from '../loader'

const saveForm = React.createRef()

// export default class GoodDetail extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             goods: goodsJSON,
//         }
//     }

//     render() {
//         const goodID = window.location.pathname.replace('/goods/', '')
//         const good = this.state.goods.find(element => element.ID === goodID)
//         return (
//             <div className='container__good_detail'>
//                 <div className='container__detail_card'>
//                     <div className='container__info'>
//                         <img src={good.IMG} />
//                         <Link to='/goods'><Button value='Назад' /></Link>
//                     </div>
//                     <div className='container__form'>
//                         <form ref={saveForm} encType='multipart/form-data'>
//                             <input type='text' defaultValue={good.TITLE} name='TITLE' />
//                             <input type='text' defaultValue={good.DISCR} name='DISCR' />
//                             <input type='text' defaultValue={good.PRICE} name='PRICE' />
//                             <input type='text' defaultValue={good.COUNT} name='COUNT' />
//                             <input type='file' name='FILE' />
//                             <input type='submit' value='Сохранить' onClick={(e) => this.saveGood(e)} />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     saveGood(e) {
//         e.preventDefault()
//         const nativeForm = saveForm.current
//         const formData = new FormData(nativeForm)
//         const file = formData.get('FILE')
//         console.log(file)
//     }
// }

export function GoodDetail() {
    const [good, setGood] = useState(null)
    const [goods, setGoods] = useState(goodsJSON)
    const { id } = useParams()


    // id Выхватывается из роутинга из роутера

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const findIn = location?.state?.goods || goods
        const good = findIn.find(el => el.ID == id)
        setTimeout(() => {
            setGood(good)
        }, 300)
    }, [])

    const saveGood = (e) => {
        e.preventDefault()
        const nativeForm = saveForm.current
        const formData = new FormData(nativeForm)

        const title = formData.get('TITLE')
        const discr = formData.get('DISCR')
        const price = formData.get('PRICE')
        const count = formData.get('COUNT')

        const img = formData.get('IMG')
        const file = formData.get('FILE')

        goods.find((el, index) => {
            if (el.ID === id) {
                goods[index].TITLE = title
                goods[index].DISCR = discr
                goods[index].PRICE = price
                goods[index].COUNT = count
                navigate('/goods', {
                    state: {
                        goods: goods
                    }
                })
            }
        })
    }

    if (!good) {
        return <Loader />
    }

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
                        <input type='submit' value='Сохранить' onClick={(e) => saveGood(e)} />
                    </form>
                </div>
            </div>
        </div>
    )
}