import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import TopTenAuthors from './components/topTenAuthors.jsx';
import AuthorSearch from './components/authorSearch.jsx';
import $ from 'jquery';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      authors: [],
      searchedAuthor: [],
      filterByStory: true,
      filterByAuthor: false,
      authorSearchTab: false
    };
  }

  renderDefault() {
    $.ajax({
      type: 'GET',
      url: '/api/story',
      dataType: 'json',
      success: (storiesData) => {
        this.setState({stories: storiesData});
      }
    });

    $.ajax({
      type: 'GET',
      url: '/api/author',
      dataType: 'json',
      success: (authorsData) => {
        this.setState({authors: authorsData});
      }
    });

  }

  componentDidMount() {
    this.renderDefault();
  }

  render() { 
    return (      
      <div>
        <input type="submit" value="Top Ten Stories" onClick={() => {this.state.filterByAuthor = false; this.state.filterByStory = true; this.state.authorSearchTab = false; this.setState();}}></input>
        <input type="submit" value="Top Ten Authors" onClick={() => {this.state.filterByAuthor = true; this.state.authorSearchTab = false; this.state.filterByStory = false; this.setState();}}></input>
        <input type="submit" value="Author Search" onClick={() => {this.state.authorSearchTab = true; this.state.filterByAuthor = false; this.state.filterByStory = false; this.setState();}}></input>
        {(this.state.filterByStory) ? <TopTen topTenStories={this.state.stories}/> : <div></div>}
        {(this.state.filterByAuthor) ? <TopTenAuthors topTenAuthors={this.state.authors}/> : <div></div>}
        {(this.state.authorSearchTab) ? <AuthorSearch /> : <div></div>}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

