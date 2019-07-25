import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';
import { getNotes } from '../services/noteServices';
export class PieChart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             labels : ['Reminder','Trash','Archive'],
            //  datasets : [{
            //      data : [2000,4000,3000],
            //      backgroundColor : ['red','green','blue']
            //  }],
             notes : [],
             Data : {},
        }
    }
    componentDidMount(){
        getNotes()
            .then(res => {
                this.setState({
                    notes : res.data.result
                })
                console.log("Notes in pie chart -->",res,this.state.notes.length);
                var archive = 0;
                var trash = 0;
                var reminder = 0;
                this.state.notes.map((key) => {
                    console.log("key is -->",key);
                    if(key.trash === true){
                        trash++
                    }
                    else if(key.reminder.length > 0 ){
                       reminder++
                    }
                    else{
                        archive++
                    }
                })

                this.setState({
                    Data : {
                        labels : this.state.labels,
                        datasets : [{
                            label : "Notes Ratio",
                            data : [reminder,trash,archive],
                            backgroundColor : ['red','green','royalblue']
                        }]
                    }

                })
                console.log("length Is ==>", reminder,trash,archive);
                
                
            })
            .catch(err => {
                console.log("error in getting notes in pie chart -->",err);
                
            })
    }
    
    render() {
        return (
            <div>
                    fd;ldf;ldgfld;l
                <Pie
                    data = {this.state.Data}
                    height = "100%"
                />    
            </div>
        )
    }
}

export default PieChart
