
import io from 'socket.io-client'
const socket = io("http://localhost:3000"); 
function App() {

  socket.emit('new', "bang"); 

  return (
    <div className="App">
      <header className="App-header">
        hello this is working
      </header>
    </div>
  );
}

export default App;
