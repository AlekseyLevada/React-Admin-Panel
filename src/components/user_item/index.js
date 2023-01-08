import React from 'react'
import './style.css'
import { ReactComponent as Trashbox } from '../../../src/icons/trashbox.svg'
import { ReactComponent as PencilEdit } from '../../../src/icons/editpencil.svg'
import { Link } from 'react-router-dom'

export function UserItem(props) {

    const { data, deleteUser } = props
    
    return (
        <div className='table__item item'>

            <div className='item__table_cell'>
                <input type='checkbox' />
            </div>

            <div className='item__table_cell'>
                <div>{data.id}</div>
            </div>

            <div className='item__table_cell'>
                <div><img src={data.avatar} /></div>
            </div>

            <div className='item__table_cell'>
                <div>{data.name}</div>
            </div>

            <div className='item__table_cell'>
                <div>{data.email}</div>
            </div>

            <div className='item__table_cell'>
                <div>{data.phone}</div>
            </div>

            <div className='item__table_cell'>
                <div>{data.website}</div>
            </div>

            <div className='item__table_cell'>
                <div>{data.company}</div>
            </div>

            <div className='item__table_cell'>
                <div className='item__table_action action'>
                    <Link to={`/users/${data.id}`}>
                        <div className='action__edit'>
                            <PencilEdit className='pencil__edit' />
                        </div>
                    </Link>
                    <Link>
                        <div className='action__delete'>
                            <Trashbox className='trashbox' onClick={() => deleteUser(data.id)} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}