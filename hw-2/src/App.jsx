
import './App.css'
import data from './db/data.json'
import {UserList} from "./components/UserList.jsx";

function App() {
  console.log(data)
  return (
    <div className='allUsers'>
      <UserList users={data.users} />
    </div>
  )
}
export default App
