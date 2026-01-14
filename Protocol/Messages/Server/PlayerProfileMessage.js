const PiranhaMessage = require('../../PiranhaMessage')
const ClientAvatar = require('../../../Logic/ClientAvatar')

class PlayerProfileMessage extends PiranhaMessage {
  constructor (client, HighID, LowID) {
    super()
    this.id = 25880
    this.client = client
    this.HighID = HighID
    this.LowID = LowID
    this.version = 1
  }

  async encode () {
    this.decks = [
        [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],   // Deck 1
    ]

    this.writeVInt(8)
    this.writeShort(255)
    this.writeVInt(1)

    this.decks.forEach(deck => {
      deck.forEach(card => {
        this.writeVInt(card)
      })
    })

    this.writeInt(this.HighID)
    this.writeInt(this.LowID)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(1)

    const avatar = new ClientAvatar()
    avatar.encode(this)
  }
}

module.exports = PlayerProfileMessage