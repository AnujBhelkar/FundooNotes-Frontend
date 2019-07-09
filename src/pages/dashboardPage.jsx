import React, { Component } from 'react'
import AppBarComponent from '../components/appBar'
import CreateNote from '../components/createNote'
import Notes from '../components/notes'
class DashboardPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slideCards : false,
             grid : false
        }
        this.slideCards = this.slideCards.bind(this)
        // this.cardView = this.cardView.bind(this)
        
    }
    slideCards() {
        try{
            this.setState({slideCards : !this.state.slideCards})
        }
        catch(err){
            console.log("Error in slide cards")
        }
    }
    grid=(grid)=>{
        try{
            this.setState({grid : grid})
            console.log("cardview..",this.state.grid);
            
        }
        catch(err){
            console.log(" Error in cards view ")
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
                            // cardView = {this.cardView}
                            cardViewProps={this.grid}
                        />
                    </div> 
                    <div>
                        <CreateNote/>
                    </div>
                    <div>
                        <Notes
                            props = {this.props}
                            // cardViewProps = {this.state.cardView}
                            grid = {this.state.grid}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardPage
