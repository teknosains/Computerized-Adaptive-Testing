import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { v4 as uuid } from "uuid";

// In a real application, this would be stored in a database
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password123" // In a real app, this would be hashed
  }
];

const sessionSecret = "super-secret-session-key";

const storage = createCookieSessionStorage({
  cookie: {
    name: "adaptive_irt_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true
  }
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

export async function getUserSession(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  
  if (!userId) {
    return null;
  }
  
  const user = users.find(u => u.id === userId);
  return user || null;
}

export async function requireUser(request: Request) {
  const user = await getUserSession(request);
  
  if (!user) {
    throw redirect("/auth/login");
  }
  
  return user;
}

export async function getUserId(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  
  if (!userId || typeof userId !== "string") {
    return null;
  }
  
  return userId;
}

export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  
  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

export async function createUser(name: string, email: string, password: string) {
  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    throw new Error("User already exists");
  }
  
  // In a real app, we would hash the password here
  const user = {
    id: uuid(),
    name,
    email,
    password // This would be hashed in a real app
  };
  
  users.push(user);
  
  return user;
}

export async function loginUser(email: string, password: string) {
  // In a real app, we would compare hashed passwords
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return null;
  }
  
  return user;
}