import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.png';
// import '../../common';
import './index.less';
import { a } from './tree-shaking';
import largeNumber from 'large-number';

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent=() => {
    // import('./text.js').then((Text) => {
    //   this.setState({
    //     Text: Text.default,
    //   });
    // });
  }

  render() {
    const funcA = a();
    const { Text } = this.state;
    const addResult = largeNumber('999', '1');
    return (
      <div className="search-text">
        {
                Text ? <Text /> : null
            }
        { funcA }
        搜索文字
        { addResult }
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}
ReactDOM.render(
  <Search />,
  document.getElementById('root'),
);
