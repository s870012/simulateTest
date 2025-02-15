import { useEffect, useState } from 'react'
import axios from 'axios'
import './assets/all.scss';

function App() {
  const [count, setCount] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://randomuser.me/api/?results=10`)
        setCount(res.data.results)
      } catch (error) {
        console.dir(error)
      }
    })()
  }, [])

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Picture</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {count.map((person) => {
              return (
                <tr key={person.id}>
                  <td>
                    {person.name.title}{person.name.first}{person.name.last}
                  </td>
                  <td>
                    {person.phone}
                  </td>
                  <td>
                    {person.email}
                  </td>
                  <img src={person.picture.thumbnail} alt="picture" />
                </tr>
              )
            })}
            </tbody>
          </table>      
        </div>
      </div>
    </div>
    </>
  )
}

export default App
