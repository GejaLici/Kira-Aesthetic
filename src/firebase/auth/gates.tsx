'use client';

import { useUser } from './use-user';

export function SignedIn({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return null;
  }

  if (user) {
    return <>{children}</>;
  }

  return null;
}

export function SignedOut({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return <>{children}</>;
  }

  return null;
}

export function AnonymouslySignedIn({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return null;
  }

  if (user?.isAnonymous) {
    return <>{children}</>;
  }

  return null;
}
