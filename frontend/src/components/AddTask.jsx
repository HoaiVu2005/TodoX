import React, { useState } from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'
import api from '@/lib/axios'

const AddTask = ({handleReload}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = async () => {
    try {
      if(newTaskTitle.trim) {
        await api.post("/tasks", {title: newTaskTitle});
        toast.success("Thêm nhiệm vụ thành công!");
        handleReload();
        setNewTaskTitle("");
      }
    } catch (error) {
      console.error("Lỗi xảy ra khi thêm: ", error);
      toast.error("Lỗi xảy ra khi thêm");
    }
  }
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      addTask();
    }
  }
  return (
    <Card className='p-6 border-0 bg-gradient-card shadow-custom-lg'>
        <div className='flex flex-col gap-3 sm:flex-row'>
        <Input
        type="text"
        value={newTaskTitle}
        onChange={(even) => setNewTaskTitle(even.target.value)}
        placeholder="Cần phải làm gì?"
        onKeyPress={handleKeyPress}
        className="h-12 px-4 text-base sm:flex-1 border-border/50  bg-slate-50 focus:border-primary/50  focus:ring-primary/20"/>

        <Button disabled={!newTaskTitle.trim()} variant="gradient" size='xl' className="px-6 " onClick={addTask}>
            <Plus className='size-5'/> Thêm 
        </Button>

        </div>
    </Card>

  )
}

export default AddTask
