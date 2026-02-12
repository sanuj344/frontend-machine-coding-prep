import Tabs from './Tabs';
import './style.css';

function App() {

const tabData = [

{
label : "Home",
content : <p>Welcome to Home</p>
},
{
    label : "Profile",
    content : <p>this is profile</p>
},
{
    label :"Settings ",
    content : <p>here are settings </p>
}

];


return (
<div className="app">
      <h1>Tabs Component</h1>
      <Tabs items={tabData} />
    </div>
);


}
export default App;