// schema.js

//Payment type: Represents a payment record.
//Queries: Fetch all payments or a single payment.
//Mutations: Create a new payment or update its status.

const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Payment {
    id: ID!
    amount: Float!
    currency: String!
    status: String!
  }

  type Query {
    payments: [Payment!]!
    payment(id: ID!): Payment
  }

  type Mutation {
    createPayment(amount: Float!, currency: String!): Payment!
    updatePaymentStatus(id: ID!, status: String!): Payment!
  }
`;

module.exports = typeDefs;

