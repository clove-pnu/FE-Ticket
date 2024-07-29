import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  to: string;
  children: ReactNode;
}

export default function LinkButton({ to, children }: LinkButtonProps) {
  return (
    <Link to={to}>
      <div className="rounded-full bg-clove-light px-8 py-2">
        {children}
      </div>
    </Link>
  );
}
