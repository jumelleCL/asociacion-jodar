import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config()

const prisma = new PrismaClient()

async function main() {
  const password = process.env.ADMIN_PASSWORD
  if (!password) throw new Error("No se encontró ADMIN_PASSWORD en .env")

  const passwordHash = await bcrypt.hash(password, 10)

  await prisma.user.upsert({
    where: { user: "admin" },
    update: {},
    create: {
      user: "admin",
      psw: passwordHash,
    },
  })
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())
