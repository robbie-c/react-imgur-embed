var React = require('react');

var globalImgurEmbedScriptTagId = "globalImgurEmbedScriptTag";

var ImgurEmbed = React.createClass({

  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  render: function () {
    return React.DOM.div({},
      React.createElement('blockquote', {
        className: 'imgur-embed-pub',
        lang: 'en',
        'data-id': this.props.id
      })
    );
  },

  componentDidMount: function () {
    var newScriptTag = document.createElement('script');
    newScriptTag.id = globalImgurEmbedScriptTagId;
    newScriptTag.src = "//s.imgur.com/min/embed.js";
    newScriptTag.type = "text/javascript";
    newScriptTag.async = true;

    document.querySelector('body').appendChild(newScriptTag);
  }

});

module.exports = ImgurEmbed;
