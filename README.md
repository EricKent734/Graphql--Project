Perfect — here’s a **starter README.md** you can drop straight into your project. It documents what the API does, how the code works, and how to test it.

---

```markdown
# GraphQL Payment API

A simple **GraphQL API** built with **Apollo Server**, **Neon Postgres**, and **API key authentication**.  
This project is designed as a learning exercise to understand GraphQL schemas, resolvers, database integration, and authentication.

---

## 🚀 Features
- **GraphQL Queries & Mutations**
  - Fetch all payments
  - Fetch a single payment
  - Create a payment
  - Update payment status
- **Database**: Neon Postgres (cloud-hosted)
- **Authentication**: API key required in request headers
- **Validation**: Only certain currencies allowed (USD, EUR, KES)

---

## 📂 Project Structure
```
graphql-payment-api/
├── node_modules/
├── .env                       # Environment variables
├── package.json
├── server.js                  # Apollo Server setup
├── schema.js                  # GraphQL schema
├── resolvers.js               # Resolver functions
├── db.js                      # Neon Postgres connection
└── utils/
    └── auth.js                # API key validation
```

---

## ⚙️ Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/graphql-payment-api.git
cd graphql-payment-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file:
```env
DATABASE_URL=postgresql://username:password@your-neon-host/dbname
API_KEY=my-secret-api
```

### 4. Set up the database
Run this SQL in your Neon console:
```sql
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  amount FLOAT NOT NULL,
  currency TEXT NOT NULL,
  status TEXT NOT NULL
);
```

### 5. Start the server
```bash
node server.js
```

Server runs at:
```
http://localhost:4000/graphql
```

---

## 🔑 Authentication
Every request must include the API key in headers:

```json
{
  "x-api-key": "my-secret-api"
}
```

---

## 🧪 Example Queries

### Create a Payment
```graphql
mutation {
  createPayment(amount: 100, currency: "USD") {
    id
    amount
    currency
    status
  }
}
```

### Update Payment Status
```graphql
mutation {
  updatePaymentStatus(id: 1, status: "COMPLETED") {
    id
    status
  }
}
```

### Fetch All Payments
```graphql
query {
  payments {
    id
    amount
    currency
    status
  }
}
```

---

## 🧰 Testing
You can test using:
- **Apollo Sandbox** → Open `http://localhost:4000/graphql` in your browser.
- **Postman/Insomnia** → Send POST requests with GraphQL queries.
- **cURL**:
```bash
curl -X POST http://localhost:4000/graphql \
  -H "Content-Type: application/json" \
  -H "x-api-key: my-secret-api" \
  -d '{"query":"{ payments { id amount currency status } }"}'
```

---

## ⚠️ Error Handling
- Missing API key → `Unauthorized: Invalid API key`
- Invalid currency → `Invalid currency`
- Nonexistent payment ID → `Payment not found`

---

## 📚 Learning Goals
- Understand GraphQL schemas and resolvers
- Connect Apollo Server to a Postgres database
- Implement simple API key authentication
- Practice error handling and validation

---

## 📝 License
This project is for **learning purposes only**. No production use intended.
```

---

This README gives you a **professional-looking project doc** that explains setup, usage, and testing clearly.  

Would you like me to also add a **diagram (client → API → Neon DB)** so you can visualize the request flow in your README?