import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storyFilter: false,
      authorFilter: false,
      showTitleCategory: 'Title',
      showAuthorCategory: 'Author',
      showScoreCategory: 'Score',
      showKarmaCategory: 'Karma',
      showAboutCategory: ''

    }
  }

  authorFilterClick(){ 
    this.setState({authorFilter: true, storyFilter: false, showTitleCategory: '', showScoreCategory: '',
    showAuthorCategory: 'Author', showKarmaCategory: 'Karma', showAboutCategory: 'About'
  });
    this.props.filterState();
  }

  storyFilterClick(){ 
    this.setState({storyFilter: true, authorFilter: false, showTitleCategory: 'Title', showScoreCategory: '',
    showKarmaCategory: '', showAboutCategory: '', showAuthorCategory:'Author' 
  });
    this.props.filterStory()
  }

  render(){
  return (
  <div>
    <input type="submit" value="Top Ten Stories" onClick={this.storyFilterClick.bind(this)}></input>
    <input type="submit" value="Top Ten Authors" onClick={this.authorFilterClick.bind(this)}></input>
  <h1> Top Ten Stories </h1>
  <table>
    <thead>
      <tr>
        <th>{this.state.showTitleCategory}</th>
        <th>{this.state.showAuthorCategory}</th>
        <th>{this.state.showScoreCategory}</th>
        <th>{this.state.showKarmaCategory}</th>
        <th>{this.state.showAboutCategory}</th>
      </tr>
    </thead>
    <tbody>
    {this.props.topTenData.map((story) => {
        if(!this.state.authorFilter && !this.state.storyFilter){
        return (<tr>
        <td>{story.title}</td>
        <td>{story.by.id}</td>
        <td>{story.score}</td>
        <td>{story.by.karma}</td>
      </tr>)
        } else if(this.state.authorFilter === true){
          return (<tr>
            <td>{story.by.id}</td>
            <td>{story.by.karma}</td>
            <td>{story.by.about}</td>
            </tr>
          )
        } else if(this.state.storyFilter === true){
          return (
            <tr>
            <td>{story.title}</td>
            <td>{story.by.id}</td>
            </tr>
          )
        }
      })}
    </tbody>
  </table>
</div>
  )
  }
};

export default TopTen;