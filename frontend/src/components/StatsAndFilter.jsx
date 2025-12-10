import { Badge } from "@/components/ui/badge"
import { FilterType } from "@/lib/data"
import { Button } from "./ui/button"
import { Filter } from "lucide-react"


const StatsAndFilter = ({ filter,setFilter,completeTaskCount = 0, activeTaskCount=0}) => {
  return (
    <div className='flex flex-col items-start justify-between sm:flex-row gap-4 sm:items-center'>
      {/* Phan thong ke */}

      <div className='flex gap-3'>
        <Badge variant='secondary' className='bg-white/50 text-accent-foreground border-info/20'>
            {activeTaskCount} {FilterType.active}
        </Badge>
        <Badge variant='secondary' className='bg-white/50 text-success border-success/20'>
            {completeTaskCount} {FilterType.completed}
        </Badge>
      </div>

      {/* Filter */}
      <div className='flex flex-col gap-2 sm:flex-row'>
        {
            Object.keys(FilterType).map((type) => (
                <Button 
                  onClick={() => setFilter(type)}
                key={type} variant={filter === type ? 'gradient' : 'ghost'}  size='sm' className='capitalize'>
                    <Filter className='size-4'/>
                    {FilterType[type]}
                </Button>
            ))
        }
      </div>
    </div>

  
  )
}

export default StatsAndFilter
