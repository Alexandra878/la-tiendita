
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
        <ItemListContainer greetin = "Hola soy un mensaje desde App"/>
        <ItemListContainer greetin = "Hola soy un segundo mensaje desde App"/>  
    </div>
  );
}

export default App;
