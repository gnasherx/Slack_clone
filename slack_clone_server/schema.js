export default `

  type Team {
    owner: User!
    members: [User]!
    channels: [Channel]!
  }

  type Channel {
    id: Int!
    name: String!
    messages: [Message!]!
    team: Team
  }

  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  type User {
    id: Int!
    username: String!
    email: String!
    teams: [Teams!]!
  }

  type Query {
      hi: String
  }
`;