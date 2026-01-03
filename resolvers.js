const pool = require('./db');
const { authenticate } = require('./utils/auth');

const validCurrencies = ["USD", "EUR", "KES"];

const resolvers = {
  Query: {
    payments: async (_, __, context) => {
      authenticate(context);
      const result = await pool.query("SELECT * FROM payments");
      return result.rows;
    },
    payment: async (_, { id }, context) => {
      authenticate(context);
      const result = await pool.query("SELECT * FROM payments WHERE id=$1", [id]);
      return result.rows[0];
    },
  },
  Mutation: {
    createPayment: async (_, { amount, currency }, context) => {
      authenticate(context);
      if (!validCurrencies.includes(currency)) throw new Error("Invalid currency");
      const result = await pool.query(
        "INSERT INTO payments(amount,currency,status) VALUES($1,$2,$3) RETURNING *",
        [amount, currency, "PENDING"]
      );
      return result.rows[0];
    },
    updatePaymentStatus: async (_, { id, status }, context) => {
      authenticate(context);
      const result = await pool.query(
        "UPDATE payments SET status=$1 WHERE id=$2 RETURNING *",
        [status, id]
      );
      if (!result.rows.length) throw new Error("Payment not found");
      return result.rows[0];
    },
  },
};

module.exports = resolvers;
