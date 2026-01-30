// src/types/next-auth.d.ts



declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    username: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string | null;
  }
}
