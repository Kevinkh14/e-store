import React,{Component} from 'react'
import './styles/Home.css'
import {connect} from 'react-redux';
import {getItems} from '../Redux/Reducers/itemsReducer'

class Home extends Component{
    constructor(){
        super()
        this.state ={
            cart : []
        }
    }
    componentDidMount(){
        this.props.getItems()
        console.log(getItems)
    }
    render(){
        
        return (
            <div className = 'home'>
                <div className = 'store-container'>
                    <div className = 'item-container'>
                        <h1>{this.props.name}</h1>
                        <img src ={this.props.pic}/>
                    </div>
                    <div className = 'item-container'></div>
                    <div className = 'item-container'></div>
                    <div className = 'item-container'></div>
                    <div className = 'item-container'></div>
                    <div className = 'item-container'></div> 
                    <div className = 'item-container'></div> 
                    <div className = 'item-container'></div> 
                    <div className = 'item-container'></div>
                    <div className = 'item-container'></div> 
                    <div className = 'item-container'></div> 
                    <div className = 'item-container'></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return{
        name: reduxState.itemsReducer.item1.name,
        pic :reduxState.itemsReducer.item1.pic
    }
}
export default connect(mapStateToProps, {
    getItems
})(Home)