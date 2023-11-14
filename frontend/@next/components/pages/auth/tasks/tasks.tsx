import { useState, useEffect } from 'react'
import { useAxiosFetch } from '@hooks'
import { getUserTasks } from '@ApiReq'
import { statusTypes } from '@types'

export const Tasks = (): JSX.Element => {
  const [tasks, setTasks] = useState<
    Array<{ title: string; description: string }>
  >([])
  const { evalApiPromise, isLoading } = useAxiosFetch(true)

  useEffect(() => {
    const fetchTask = async () => {
      const data = await evalApiPromise(getUserTasks('A'))
      if (data?.responseCode === statusTypes.OK) {
        setTasks(data?.data)
      }
    }
    fetchTask()
  }, [])
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[500px] flex flex-wrap items-center bg-yellow-200 p-8 rounded-lg shadow-2xl'>
        <p className='w-full text-center font-bold text-xl'>Tasks</p>
        {/* Task */}
        {tasks?.map((task) => {
          return (
            <div className='w-full bg-white'>
              <p>{task.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
