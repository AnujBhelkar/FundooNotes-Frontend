import React, { Component } from 'react'
import AppBarComponent from '../components/appBar'
import CreateNote from '../components/createNote'
import Notes from '../components/notes'
// import DialogTest from '../components/dialogTest';
class DashboardPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             slideCards : false,
             grid : false,
             archiveOpen : '',
             archiveNotes : '',
             trashNotes : '',
             reminderNotes : ''
        }
        this.createcard=React.createRef()
        this.slideCards = this.slideCards.bind(this)
       // this.createcard = this.createcard.bind(this)

        // this.cardView = this.cardView.bind(this)
        
    }
    createNoteProps=(newcard)=>{
        console.log(newcard);
        
        this.createcard.current.displayCard(newcard)
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
    archiveOpenAppBarToDashboard = (archiveNotes,trashNotes,reminderNotes)=>{
        console.log("Notes Value in Dashboard ==>",archiveNotes,trashNotes,reminderNotes);
        
        if(archiveNotes === true || trashNotes === true || reminderNotes === true ){
            this.setState({
                archiveNotes:archiveNotes,
                trashNotes:trashNotes,
                reminderNotes:reminderNotes
            })
        }
        else{
            this.setState({
                archiveNotes:false,
                trashNotes:false,
                reminderNotes:false
            })
        }
    }
    // archiveOpen(value){
    //     // this.setState({archiveOpen: value})
    //     this.props.archiveOpenDashboardToNotes(value)
    // }
    
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
                            archiveOpenAppBarToDashboard = {this.archiveOpenAppBarToDashboard}
                        />
                    </div> 
                    <div>
                        <CreateNote
                        createNoteProps={this.createNoteProps}
                        />
                    </div>
                    <div>
                        <Notes
                            ref={this.createcard}
                            props = {this.props}
                            // cardViewProps = {this.state.cardView}
                            grid = {this.state.grid}
                            archiveNotes = {this.state.archiveNotes}
                            trashNotes = {this.state.trashNotes}
                            reminderNotes = {this.state.reminderNotes}
                        />
                    </div>
                    
                </div>
               
            </div>
        )
    }
}

export default DashboardPage
