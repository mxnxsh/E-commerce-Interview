import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  return (
    <Router>
      <div className="grid-container">
        <Navbar />
        <main>
          <Route exact path='/' component={HomeScreen}></Route>
          {/* <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/signin' component={SignInScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>

          <Route path="/profile" component={ProfileScreen}></Route> */}
        </main>
        <footer className="row center">All right reserved.</footer>
      </div>
    </Router>
  );
}
export default App;