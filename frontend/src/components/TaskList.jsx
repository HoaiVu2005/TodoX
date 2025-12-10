import React from 'react'
import TaskEmptyStats from './TaskEmptyStats';
import TaskCard from './TaskCard';

const TaskList = ({FilterTask, filter, handleReload}) => {
   
   

    if(!FilterTask || FilterTask.length === 0) {
        return <TaskEmptyStats filter={filter}/>
    }
    // if(!FilterTask || FilterTask.length === 0) {
    //     return <TaskEmptyStats filter={filter}/>
    // } 
  return (
    // <div className='space-y-3 '>
    // {FilterTask.map((task, index) => (
    //     <TaskCard key={task._id ?? index} task={task} index={index}/>
    // ))}        

    // </div>

    <div className='space-y-3'>
        {FilterTask.map((task, index) => (
            <TaskCard handleReload={handleReload} key={task._id && index} task={task} index={index}/>
        ))}
    </div>
  )
}

export default TaskList
