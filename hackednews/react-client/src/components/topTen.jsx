import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
export default class TopTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyFilter: false,
      authorFilter: false,
      showTitleCategory: 'Title',
      showAuthorCategory: 'Author',
      showScoreCategory: 'Score',
      showKarmaCategory: 'Karma',
      showAboutCategory: ''
    };
  }

  authorFilterClick() { 
    this.setState({authorFilter: true, storyFilter: false, showTitleCategory: '', showScoreCategory: '',
      showAuthorCategory: 'Author', showKarmaCategory: 'Karma', showAboutCategory: 'About'
    });
    this.props.filterState();
  }

  storyFilterClick() { 
    this.setState({storyFilter: true, authorFilter: false, showTitleCategory: 'Title', showScoreCategory: '',
      showKarmaCategory: '', showAboutCategory: '', showAuthorCategory: 'Author' 
    });
    this.props.filterStory();
  }

  render() {
    return (
      <div>
        <div> Top Ten Stories </div>
        <table>
          <thead>
            <tr>
              <th>{this.state.showTitleCategory}</th>
              <th>{this.state.showAuthorCategory}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.topTenStories.map((story) => {
    
              return (<tr>
                <td>{story.title}</td>
                <td>{story.by}</td>
              </tr>);

            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
