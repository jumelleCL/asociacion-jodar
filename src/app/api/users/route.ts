import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return new Response(JSON.stringify({ error: "Username and password required" }), { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { user: username },
  });

  if (!user || user.psw !== password) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
  }

  return new Response(JSON.stringify({ message: "Login successful", user: { id: user.id, user: user.user } }), { status: 200 });
}