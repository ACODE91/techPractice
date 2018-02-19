import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
  <div>
  <h1> Top Ten Stories </h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
    {this.props.topTenData.map((story) => {
        return (<tr>
        <td>{story.title}</td>
        <td>{story.by.id}</td>
        <td>{story.score}</td>
      </tr>)
      })}
    </tbody>
  </table>
</div>
  )
  }
};

export default TopTen;