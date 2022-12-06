import React from 'react'
import './style.css'

export default class Button extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            //<input className='detailBtn' type='submit' value={this.state.value}/>
            <div className='detailBtn'>
                {this.props.value}
            </div>
        )
    }
}