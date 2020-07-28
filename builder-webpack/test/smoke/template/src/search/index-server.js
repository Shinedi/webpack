const React = require('react');
const largeNumber = require('large-number');
const logo = require('./images/logo.png').default;

require('./index.less');

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumber('999', '1');
    return (
      <div className="search-text">
        {
                Text ? <Text /> : null
            }
        搜索文字噢
        { addResult }
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

module.exports = <Search />;
