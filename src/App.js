import './App.css';
import WalletButton from './components/WalletButton';
import TicketSystem from './components/TicketSystem';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Event Ticketing App</h1>
        <WalletButton />
      </header>
      <main>
        <TicketSystem />
      </main>
    </div>
  );
}

export default App;