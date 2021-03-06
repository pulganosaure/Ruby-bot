const __ = require("iterate-js");
const discordToken =
  process.env.DISCORDTOKEN || require("../config").discordToken;

const init = require("./Load.js");

module.exports = __.class(
  function(cfg) {
    init(this, cfg);
  },
  {
    connect: function() {
      return this.client.login(process.env.DISCORDTOKEN);
    },
    disconnect: function() {
      return this.client.destroy();
    }
  }
);
