import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const seed = async () => {
  const authors = [
    {
      name: "J.R.R. Tolkien",
      bio: "The creator of Middle-earth and author of The Lord of the Rings.",
      books: {
        create: [
          { title: "The Hobbit" },
          { title: "The Fellowship of the Ring" },
          { title: "The Two Towers" },
          { title: "The Return of the King" }
        ]
      }
    },
    {
      name: "George R.R. Martin",
      bio: "The author of the epic fantasy series A Song of Ice and Fire.",
      books: {
        create: [
          { title: "A Game of Thrones" },
          { title: "A Clash of Kings" }
        ]
      }
    },
    {
      name: "J.K. Rowling",
      bio: "The creator of the Harry Potter series.",
      books: {
        create: [
          { title: "Harry Potter and the Philosopher's Stone" },
          { title: "Harry Potter and the Chamber of Secrets" }
        ]
      }
    }
  ];

  for (const author of authors) {
    await prisma.author.create({
      data: author,
    });
  }
}

async function main() {
  try {
    await seed();
    console.log("Seeding completed");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect()
  }
}

main();