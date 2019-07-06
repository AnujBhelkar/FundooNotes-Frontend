import React, { Component } from 'react'
import AppBarComponent from '../components/appBar'
import CreateNote from '../components/createNote'
class DashboardPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slideCards : false
        }
        this.slideCards = this.slideCards.bind(this)
    }
    slideCards() {
        try{
            this.setState = {slideCards : ! this.state.slideCards}
        }
        catch(err){
            console.log("Error in slide cards")
        }
    }
    render() {
        const slidingCards = this.state.slideCards ? "beforeSlide" : "afterSlide"; 
        return (
            <div>
                <div className = "dashboard">
                    <div className = {slidingCards}>
                        <AppBarComponent 
                            props = {this.props}
                            slideCards={this.slideCards}
                        />
                    </div> 
                    <div>
                        <CreateNote/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardPage
