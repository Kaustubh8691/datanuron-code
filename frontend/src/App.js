import SplitPane from 'react-split-pane';
import './App.css';
import C1 from './component/Component1'
import C2 from './component/Component2'
import C3 from './component/Component3'
function App() {
  return (
    <div className="App">
      <SplitPane split="horizontal" minSize={50} defaultSize={300}>
      <SplitPane split="vertical" defaultSize={700}>
         <C1/>
          <C2/>
        </SplitPane>
        <C3/>
      </SplitPane>
    </div>
  );
}

export default App;