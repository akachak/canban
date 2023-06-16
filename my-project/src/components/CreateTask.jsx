import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
const CreateTask=({tasks, setTasks})=>{
    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo"
    })
    const handleSubmit=(e)=>
    {
        e.preventDefault();

        if(task.name.length<3)
        {
            return toast.error("Задача должна содержать больше символов( > 3 )");
        }

        if(task.name.length>50)
        {
            return toast.error("Задача должна содержать меньше символов( < 50 )");
        }

        setTasks((prev)=> {
            const list=[...prev, task];

            localStorage.setItem("tasks", JSON.stringify(list));
            return list;
        });

        toast.success("Задача добавлена!");
        setTask({
            id: "",
            name: "",
            status: "todo",
        });
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="border-2 border-slate-100 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1" 
            value={task.name}
            onChange={(e)=>setTask({...task, id: uuidv4(), name: e.target.value})}
            />
            <button className="bg-cyan-200 rounded-md px-4 h-12 text-black">Добавить</button>
        </form>
    );
}

export default CreateTask;