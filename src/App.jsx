/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import './App.css'
import { contextAPI } from './shared/Context/Context';
import NameList from './components/NameLIst/NameList';

function App() {

  const { nameList, setIsOpen } = useContext(contextAPI);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}> Make it true </button>
      <button onClick={() => setIsOpen(false)}> Make it false </button>
      <NameList />

      {
        nameList?.length
      }
      {
        nameList?.map((names, i) => (
          <p key={i}>{names}</p>
        ))
      }
    </div>
  )
}

export default App
