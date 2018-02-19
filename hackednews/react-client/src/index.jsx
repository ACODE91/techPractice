import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
import fillerData from '../dummy_data.js'

class App extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            hackerData: fillerData 
        }
    }

    renderDefault(){
        $.ajax({
        type: 'GET',
        url: '/api/story',
        dataType: 'json',
        success: (sampleData) => {
            this.setState({hackerData: sampleData});
            // console.log(this.state.hackerData)
        }
        })

    }

    componentDidMount() {
        this.renderDefault()
    }

    // clickFn(){
    //     //add all of the dummy data on the view first and 
    //     //on click use ajax post to send it over to the database
    //     $.ajax({
    //         type: 'POST',
    //         url: '/',
    //         data: this.state.dummyData, //array
    //         dataType: 'application/json',
    //         success: (gotData) => {
    //             console.log(gotData);
    //         }
    //     })
    // }

   render() { 
    return (  
    <TopTen topTenData={this.state.hackerData}/>
    )
   }
}
ReactDOM.render(<App />, document.getElementById('app'));

