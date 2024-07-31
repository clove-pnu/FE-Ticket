import { ReactNode } from 'react';

export default function CategoryTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="py-4 text-center text-3xl font-bold">
      {children}
    </h1>
  );
}
