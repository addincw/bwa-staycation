import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-900 flex flex-col items-center justify-center min-h-screen text-2xl text-white">
        <img src={logo} className="h-96 w-96" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-ocean"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
