import React from 'react';
import ReactDOM from 'react-dom';

//ReactDOM.render(<div><h1>hello world</h1><p>this is a paragraph</p></div>, document.getElementById('root'));

function MyList() {
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  )
}

function MyInfo() {
  return (
    <div>
      <h1>name</h1>
      <p>blurb</p>
      <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ol>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
)