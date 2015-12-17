


describe('ImgurEmbed', function() {
  it('should render an imgur embed from an id', function () {

    var testStagingId = '#test-staging1';

    document.querySelector(testStagingId).innerHTML = '';

    var id = 'aBHoZ3R';
    var element = React.createElement(ImgurEmbed, {id: id});
    React.render(element, document.querySelector(testStagingId));
  });

  it('should render multiple imgur embeds from ids', function () {

    var testStagingId = '#test-staging2';

    document.querySelector(testStagingId).innerHTML = '';

    var id = 'aBHoZ3R';
    var element1 = React.createElement(ImgurEmbed, {id: id, key: 1});
    var element2 = React.createElement(ImgurEmbed, {id: id, key: 2});
    React.render(React.DOM.div({}, [element1, element2]), document.querySelector(testStagingId));
  });
});
