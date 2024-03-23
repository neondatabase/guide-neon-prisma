import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("Hello World! This is a book catalog.");
});

app.get("/authors", async (req, res) => {
  const authors = await prisma.author.findMany();
  res.json(authors);
});

app.get("/books/:author_id", async (req, res) => {
  const authorId = parseInt(req.params.author_id);
  const books = await prisma.book.findMany({
    where: {
      authorId: authorId
    }
  });
  res.json(books);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});