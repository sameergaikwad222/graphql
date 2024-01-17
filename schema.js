export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author! 
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        reviews : [Review]
        review(id:ID!): Review
        games: [Game]
        game(id:ID!):Game
        authors: [Author]
        author(id:ID!): Author
    }

    type Mutation {
        addGame(game:GameTypeInput):Game!
        deleteGame(id:ID!):[Game!]
        updateGame(id:ID!,edits:EditGameTypeInput!):Game!
        addAuthor(author:AuthorTypeInput!):Author!
        deleteAuthor(id:ID!):[Author!]
        updateAuthor(id:ID!,edits:EditAuthorTypeInput!):Author!
    }

    input GameTypeInput {
        title: String!,
        platform: [String!]!
    }

    input AuthorTypeInput {
        name: String!
        verified: Boolean!
    }

    input EditGameTypeInput {
        title: String,
        platform: [String!]
    }

    input EditAuthorTypeInput {
        name: String
        verified: Boolean
    }
`;
