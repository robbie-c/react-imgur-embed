var React = require('react');

var ImgurEmbed = React.createClass({

  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
        <blockquote className="imgur-embed-pub" lang="en" data-id={this.props.id}/>
      )
  }

});

module.exports = ImgurEmbed;
