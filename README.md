# Running Neon database migrations using Prisma

This application is a simple typescript API using the Prisma ORM, Neon and Express.js. It returns a list of authors and books written by them. This project uses Prisma to generate and run database migrations.

To build this project from scratch, check out the [guide in Neon's documentation](https://neon.tech/docs/guides/prisma-migrations).

## Set up locally

You will need the following:

- A [Neon](https://neon.tech) account and a project
- Node.js and npm

1. Clone this repository.

```bash
git clone https://github.com/neondatabase/guide-neon-prisma
```

2. Navigate to the project directory and install the dependencies.

```bash
cd guide-neon-prisma
npm install
```

3. Create a `.env` file in the root of the project and add the following environment variables:

```bash
DATABASE_URL=
```

4. Run the migrations using Prisma.

```bash
npx prisma migrate dev
```

5. Add some entries to the database by running the seed script.

```bash
node seed.js
```

6. Start the server.

```bash
node index.js
```

7. Visit `http://localhost:3000` in your browser to see the list of authors and books. Or use curl to access the api from the terminal.

```bash
# Get a list of authors
curl http://localhost:3000/authors

# Get books by author with id 1
curl http://localhost:3000/books/1
```
