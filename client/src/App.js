
import io from 'socket.io-client'
import Canvas from './canvas'
const socket = io("http://localhost:3000"); 
function App() {

  socket.emit('new', "bang"); 

  return (
        <Canvas/>
  );
}

export default App;
