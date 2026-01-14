const PiranhaMessage = require('../../PiranhaMessage')
const PlayerProfileMessage = require('../Server/PlayerProfileMessage')

class InboxOpenedMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10517
    this.version = 1
  }

  async decode () {}

  async process () {}
}

module.exports = InboxOpenedMessage