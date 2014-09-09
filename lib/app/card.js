(function() {
  var Card;

  window.Card = Card = (function() {
    function Card(options) {
      if (options == null) {
        options = {};
      }
      this.name = options['name'];
      this.kingdom = options['kingdom'];
    }

    return Card;

  })();

}).call(this);
