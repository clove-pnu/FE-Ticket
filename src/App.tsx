import React, { Suspense } from 'react';

const RemoteButton = React.lazy(() => import('remoteApp/Button'));

export default function App() {
  return (
    <div>
      Hello, world!
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}
