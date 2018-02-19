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
        }
        })
    }

    changeStateByFilteringAuthor(){
      var sortingState = this.state.hackerData;

        sortingState.sort(function(a, b){
        return b.by.karma - a.by.karma;
        });

        sortingState = sortingState.slice(0, 10);

        this.setState({hackerData: sortingState});
    }

    changeStateByFilteringStory(){
        var sortingState = this.state.hackerData;
  
          sortingState.sort(function(a, b){
          return b.score - a.score;
          });
  
          sortingState = sortingState.slice(0, 10);
  
          this.setState({hackerData: sortingState});
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
    <TopTen topTenData={this.state.hackerData} 
    filterStory={this.changeStateByFilteringStory.bind(this)}
    filterState={this.changeStateByFilteringAuthor.bind(this)}/>
    )
   }
}
ReactDOM.render(<App />, document.getElementById('app'));

