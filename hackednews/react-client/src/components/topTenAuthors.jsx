import React from 'react';

export default function TopTenAuthors(props) {
  return <div>
   
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Karma</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody>
        {props.topTenAuthors.map((author) => {

          return (<tr>
            <td>{author.id}</td>
            <td>{author.karma}</td>
            <td>{author.about}</td>
          </tr>);

        })
        }
      </tbody>
    </table>
  </div>;
}