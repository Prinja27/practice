import './App.css';

function App() {
  const name = 'Aayush'
  return (
    <div className="App">
      <div className='App-header'>
        {name} Prinja
        <Demo />
      </div>
    </div>
  );
}

function Demo() {
  const newName = "Sakshi"
  return (
    <div className='App' >
      <div className='App-header'>
        {newName} Prinja
      </div>
    </div>
  )
}

export default App;
