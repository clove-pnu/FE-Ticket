import { BrowserRouter } from 'react-router-dom';
import PlayTicketingPage from './pages/PlayTicketingPage';
import TicketProvider from './stores/ticket';

export default function App() {
  return (
    <TicketProvider>
      <BrowserRouter>
        <PlayTicketingPage />
      </BrowserRouter>
    </TicketProvider>
  );
}
