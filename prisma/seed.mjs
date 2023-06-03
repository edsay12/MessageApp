// import { PrismaClient } from "@prisma/client";
// import { faker } from "@faker-js/faker";

// const prisma = new PrismaClient();

// async function user() {
//   await prisma.user.deleteMany(); // deleta tudo antes de adicionar novos users
//   const quantity = 10;

//   Array.from(Array(quantity).keys()).forEach(async () => {
//     await prisma.user.create({
//       data: {
//         name: faker.internet.userName(),
//         last_name: faker.internet.userName(),
//       },
//     });
//   });
// }

// async function seed() {
//   await user();
// }

// seed().finally(() => prisma.$disconnect());
