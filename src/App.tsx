import React, { useState, useEffect } from 'react'
// @ts-ignore
import { listenEvent } from '@mfe/utils'

const App = () => { 
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    listenEvent('@mfe/react-single/todo/add-task', (event: any) => {
      setTasks(oldTasks => [...oldTasks, event.detail])
    })
  }, [])

  return (
    <>
      <h1>Parcel example</h1>
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App