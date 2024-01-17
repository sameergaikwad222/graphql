import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import config from "./config/config.json" assert { type: "json" };

//types
import { typeDefs } from "./schema.js";

// _db Database files
import db from "./_db.js";

//Resolver Functions
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id == parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id == parent.id);
    },
  },
  Review: {
    game(parent) {
      return db.games.find((g) => g.id == parent.game_id);
    },
    author(parent) {
      return db.authors.find((a) => a.id == parent.author_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);
      return db.games;
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);
      return game;
    },
    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id == args.id) {
          return {
            ...g,
            ...args.edits,
          };
        }
        return g;
      });

      const game = db.games.find((g) => g.id == args.id);
      return game;
    },
    addAuthor(_, args) {
      let author = {
        ...args.author,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.authors.push(author);
      return author;
    },
    deleteAuthor(_, args) {
      db.authors = db.authors.filter((a) => a.id !== args.id);
      return db.authors;
    },
    updateAuthor(_, args) {
      db.authors = db.authors.map((a) => {
        if (a.id == args.id) {
          return {
            ...a,
            ...args.edits,
          };
        }
        return a;
      });
      const author = db.authors.find((a) => a.id == args.id);
      return author;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: config.port ?? 3000,
  },
});

console.log("Server started on port ", config.port ?? 3000);
