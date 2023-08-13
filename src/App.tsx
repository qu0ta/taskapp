import React, {useState} from 'react';
import {AddTask} from "./components/AddTask";
import {Task} from "./components/Task";

interface ITask {
    text: string
}

function App() {
    const [tasks, setTasks] = useState<ITask[]>([])
    const changeTasks = (task: ITask) => {
        setTasks(prevState => prevState.concat(task))
    }
    function deleteTask(index: number) {
        setTasks(tasks.filter(task => tasks.indexOf(task) !== index))
    }
    return (
        <>
            <AddTask onSubmit={changeTasks}/>
            {tasks && <p> No tasks!</p>}
            { tasks.map((task, index) => <Task text={task.text} key={index} index={index} onDelete={deleteTask}/>)}
        </>
    )
}

export default App;
