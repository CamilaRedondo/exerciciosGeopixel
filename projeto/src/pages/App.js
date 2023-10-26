import '../styles/App.css';
import Clock from '../components/Clock';
import ItemSelector from '../components/ItemSelector';
import Ball from '../components/Ball';



function App() {
  return (
    <div class="container">
      <div class="clock">
        <Clock />
      </div>
      <div class="itemSeletor">
        <ItemSelector />
      </div>
      <div class="ball">
        <Ball />
      </div>
    </div>

  );
}


export default App;
