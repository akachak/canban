import { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask'
import ListTasks from './components/ListTasks'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);

  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  },[])
  return (
    <>
      <Toaster/>
      <div className='bg-slate-600 w-screen h-screen flex flex-col items-center gap-16 pt-24'>
        <CreateTask tasks={tasks} setTasks={setTasks}/>
        <ListTasks tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
    
  )
}

export default App
