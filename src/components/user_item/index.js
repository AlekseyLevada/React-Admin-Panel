import './style.css'
import React from 'react'

export function UserItem(props) {

    const { data } = props

    return (
        <>
            <div className='user__item user'>
                
                <div>
                    <div classname='user__table-header'>
                        
                    </div>
                    <div className='user__checkbox'>
                        <input type='checkbox'/>
                    </div>
                </div>
                <div>
                    <div classname='user__table-header'>
                        ID
                    </div>
                    <div className='user__id'>
                        {data.id}
                    </div>
                </div>
                <div>
                    <div classname='user__table-header'>
                        Имя
                    </div>
                    <div className='user__name'>
                        {data.name}
                    </div>
                </div>
                <div>
                    <div classname='user__table-header'>
                        Аватар
                    </div>
                    <div className='user__avatar'>
                        <img src={data.avatar}/>
                    </div>
                </div>
                <div>
                    <div classname='user__table-header'>
                        Почтовый ящик
                    </div>
                    <div className='user__email'>
                        {data.email}
                    </div>
                </div>
                <div>
                    <div classname='user__table-header'>
                        Телефон
                    </div>
                    <div className='user__phone'>
                        {data.phone}
                    </div>
                </div>
                <div>
                    <div classname='user__table-header'>
                        Сайт
                    </div>
                    <div className='user__website'>
                        {data.website}
                    </div>
                </div>
                <div>
                    <div classname='user__table-header'>
                        Компания
                    </div>
                    <div className='user__company'>
                        {data.company}
                    </div>
                </div>
                
            </div>
        </>
    )
}