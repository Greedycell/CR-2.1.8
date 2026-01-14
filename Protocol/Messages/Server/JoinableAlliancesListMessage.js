const PiranhaMessage = require('../../PiranhaMessage')

class JoinableAlliancesListMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24304
    this.client = client
    this.version = 1
  }

  async encode () {
    this.writeVInt(1) // Alliances Count

    this.writeInt(0) // HighID
    this.writeInt(1) // LowID
    this.writeString('Greedycell') // Name
    this.writeVInt(0) // Badge

    this.writeVInt(1) // Type
    this.writeVInt(1) // MembersCount
    this.writeVInt(6400) // Score
    this.writeVInt(0) // RequiredScore

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(50)
    this.writeVInt(0) // Donations
    this.writeVInt(2)

    this.writeVInt(0) // Locale
    this.writeVInt(0) // Region

    this.writeBoolean(false)

    if (false)
    {
        // TODO : Encode the clan event.
    }
  }
}

module.exports = JoinableAlliancesListMessage