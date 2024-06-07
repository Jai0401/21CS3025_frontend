import './App.css'
import Login from './components/login'
import SignUp from './components/signUp'
import { Route, Router } from 'react-router-dom'

function App() {

  return (
    <>
    {/* <Router>
      <Route Component={SignUp} path='/'></Route>
      <Route Component={Login} path='/login'></Route>
    </Router> */}
     <SignUp></SignUp>
     <Login></Login>
    </>
  )
}

export default App
