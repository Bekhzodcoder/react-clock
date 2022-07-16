import React from 'react'
import ReactDOM from 'react-dom'
import './clock.css'

class Clock extends React.Component{
    constructor(props){
        super(props);

        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timeId = setInterval(()=>{
            this.setState({date: new Date()})
        }, 1000)
    }

    componentWillMount(){
        clearInterval(this.timeId)
    }

    render(){
        return(
            <>
                <div className="clock">
                    <div className='hour_hand' style={{transform: `rotateZ(${this.state.date.getHours()*30}deg)`}}></div>
                    <div className='min_hand' style={{transform: `rotateZ(${this.state.date.getMinutes()*6}deg)`}}></div>
                    <div className='sec_hand' style={{transform: `rotateZ(${this.state.date.getSeconds()*6}deg)`}}></div>
                
                    <span className='twelve'>12</span>
                    <span className='one'>1</span>
                    <span className='two'>2</span>
                    <span className='three'>3</span>
                    <span className='four'>4</span>
                    <span className='five'>5</span>
                    <span className='six'>6</span>
                    <span className='seven'>7</span>
                    <span className='eight'>8</span>
                    <span className='nine'>9</span>
                    <span className='ten'>10</span>
                    <span className='eleven'>11</span>
                
                </div>


            </>
        )
    }
}

export default Clock