import React from 'react';
import $ from 'jquery';

export default class AuthorSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      searchedAuthor: '',
      author: [],
    };
    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.state.searchedAuthor = event.target.value;
    this.setState();
  }

  handleSubmit() {
    $.ajax({
      type: 'get',
      url: `/api/author/${this.state.searchedAuthor}`,
      dataType: 'json',
      success: (authorData) => {
        this.setState({author: authorData, searched: true});
      }
    });
  
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Author Name" onChange={(e) => { this.handleChange(e); }}></input> 
        <input type="submit" value="search" onClick={this.handleSubmit.bind(this)}></input>
        {(this.state.searched) ? <div>showing results for {this.state.searchedAuthor}
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {this.state.author.map((story) => {
                  
                return (<tr>
                  <td>{story.title}</td>
                  <td>{story.score}</td>
                </tr>);

              })
              }
            </tbody>
          </table>
        </div> 

    
          : <div></div>}

      </div>
    );
  }
}