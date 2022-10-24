
import './App.css';
// import List from './components/List'
// import Specialsong from './components/Specialsong';
// import {lists} from './data/store'
import Carouse from './components/CarouseItem';
import {SliderData} from './data/imageslider'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
       
    //     {lists.map((item,index) => {
    //       return(
    //         <List img = {item.img} title = {item.title} artists = {item.artists} remaintime = {item.remaintime} key = {index}/>
    //       )
    //     })}
    //     </header>
    //     <Specialsong/>
    // </div>
    <div className='App'>
        <Carouse slides = {SliderData}/>
    </div>
  );
}

export default App;
