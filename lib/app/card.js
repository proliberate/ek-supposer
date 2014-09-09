(function() {
  var Card;

  window.Card = Card = (function() {
    function Card(options) {
      if (options == null) {
        options = {};
      }
      this.name = options['name'];
      this.kingdom = options['kingdom'];
      this.stars = options['stars'];
      this.wait = options['wait'];
    }

    return Card;

  })();

}).call(this);
