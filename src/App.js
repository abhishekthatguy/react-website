import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Avtar from './Avtar';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import { Typography ,Layout,Menu, Switch, Divider } from 'antd';

// const { Title } = Typography;
// const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Menu/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/avtar" component={Avtar}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
     <Demo/>
    </div>
    </BrowserRouter>
  );
}
// function App() {
//   return (
    
//     <>
//       <Layout>
//       <Header>Header</Header>
//       <Layout>
//       <Sider>Sider</Sider>
//       <Layout>
//         <Content>Content</Content>
//         <Footer>Footer</Footer>
//       </Layout>
//       </Layout>
      
      
//     </Layout>
//     </>
    
//   );
// }

export default App;
