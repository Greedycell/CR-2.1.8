const PiranhaMessage = require('../../PiranhaMessage')

class AskForTvContentMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10185
    this.version = 1
  }

  async decode () {}

  async process () {
  }
}

module.exports = AskForTvContentMessage
