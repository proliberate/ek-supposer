(function() {
  var Ability;

  window.Ability = Ability = (function() {
    function Ability(cmd, options) {
      this.cmd = cmd != null ? cmd : (function(options) {
        if (options == null) {
          options = {};
        }
      });
      if (options == null) {
        options = {};
      }
    }

    Ability.prototype.activate = function(player, options) {
      if (options == null) {
        options = {};
      }
      return this.cmd.call(player, options);
    };

    return Ability;

  })();

}).call(this);
