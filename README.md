# GraphQL

Beginner Friendly GraphQL Intro

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

Welcome to the "Small Introductory Repo" – a friendly starting point to get acquainted with Node.js and GraphQL. This repository serves as a beginner-friendly guide for those looking to explore the fundamentals of Node.js and GraphQL technologies. Whether you're new to web development or seeking to enhance your skills, this project provides a concise and accessible introduction. Dive in, explore the basics, and begin your journey to becoming familiar with the powerful combination of Node.js and GraphQL.

## Features
 
- **Introduction to Node.js**: Explore the basics of Node.js, a popular server-side JavaScript runtime
- **GraphQL Fundamentals**: Gain a foundational understanding of GraphQL, a query language for APIs.
- **Apollo Server Integration**: Learn how to set up and use Apollo Server, a flexible GraphQL server implementation.
- **Simple Project Structure**: Navigate through a straightforward project structure designed for easy comprehension and learning.
- **Hands-On Examples**: Dive into hands-on examples to reinforce your understanding of Node.js and GraphQL concepts.
- **Step-by-Step Setup Guide**: Follow a step-by-step installation guide to set up the project locally and start your learning journey.
- **Beginner-Friendly**: Tailored for beginners, this repo provides a gentle introduction to key concepts without overwhelming complexity.
- **Versatile Learning Resource**: Use this repository as a standalone learning resource or as a starting point for more advanced projects.
- **Documentation**: Access comprehensive documentation to understand each part of the project and its functionalities.
- **Open-Source Contribution**: Contribute to the project and enhance your skills by participating in an open-source learning environment.

## Requirements

To run this project, you will need:

- Node.js (version)
- npm or yarn (version)
- Other dependencies

## Getting Started

Follow these steps to get your project up and running locally.

### Installation

```bash
# Clone the repository
git clone https://github.com/sameergaikwad222/graphql.git

# Change directory
cd graphql

# Install dependencies
npm install

# Run the Server
npm start
```

## Usage
```bash
# Multiple Games
# query GameQuery {
#   games {
#     id, 
#   }
# }

#Multiple Authors
query MultipleAuthorQuery {
  authors {
    id,
    name,
    verified, 
  }
}


#Multiple Reviews
# query ReviewsQuery {
#   reviews {
#     rating,
#     content,
#     game {
#       title
#     },
#     author {
#       name,
#       verified
#     }
#   }
# }

=============================================================

query AuthorQuery($id:ID!){
  author(id: $id) {
    id,
    name,
    verified,
    reviews {
      rating
    }
  }
}

# query ReviewQuery($reviewId: ID!){
#   review(id: $reviewId) {
#     content,
#     rating,
#     author {
#       name,
#       verified
#     },
#     game {
#       title,
#       platform
#     }
#   }
# }

# query GetSingleGameQuery($gameId: ID!){
#   game(id: $gameId) {
#     id,
#     platform,
#     title
#   }
# }

===================================================
# mutation AddGameMutation($game: GameTypeInput){
#   addGame(game: $game) {
#     id,
#     platform,
#     title
#   }
# }

mutation AddAuthorMutation($author: AuthorTypeInput! ){
  addAuthor(author: $author) {
    name,
    verified,
    id
  }
}

=======================================================
# mutation deleteGame($deleteGameId: ID!){
#   deleteGame(id: $deleteGameId) {
#     id,
#     platform,
#     title
#   }
# }

mutation DeleteAuthorMutation($deleteAuthorId: ID!){
  deleteAuthor(id: $deleteAuthorId) {
    id,
    name
  }
}

===================================================

# mutation UpdateGameMutation($updateGameId: ID!, $edits: EditGameTypeInput!){
#   updateGame(id: $updateGameId, edits: $edits) {
#     platform,
#     id,
#     title
#   }
# }

mutation UpdateAuthorMutation($updateAuthorId: ID!, $edits: EditAuthorTypeInput!){
  updateAuthor(id: $updateAuthorId, edits: $edits) {
    id,
    name,
    verified
  }
}


```


## Contributing

We welcome contributions! To contribute to this project, please follow our guidelines for pull requests and coding standards. See [CONTRIBUTING.md](https://github.com/sameergaikwad222/graphql/blob/main/CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sameergaikwad222/graphql/blob/main/licence.md) file for details.

## Acknowledgements
Credits to [@NetNinja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) for teaching GraphQL easy way.
