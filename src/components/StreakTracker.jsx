import { useState } from 'react'
import '../styles/StreakTracker.css'

export default function StreakTracker({ month, days }) {
    const tasks = ["Cardio/Running", "Lifting", "Studying", "Reading"]

    const [streaks, setStreaks] = useState(
        tasks.reduce((acc, task) => {
            acc[task] = Array(days).fill(false)
            return acc
        }, {})
    )

    const toggleDay = (task, index) => {
        setStreaks((prevStreaks) => {
            const newTaskStreak = [...prevStreaks[task]]
            newTaskStreak[index] = !newTaskStreak[index]

            return {
                ...prevStreaks,
                [task]: newTaskStreak
            }
        })
    }

    return (
        <div>
            <div className='streak-tracker'>
                {tasks.map((task) => {
                    const completedDays = streaks[task].filter(Boolean).length
                    return (
                        <div key={task} className={'task-container'}>
                            <h2 className='task-title'>{task}</h2>
                            <p className='completed-days-title'>{completedDays} days completed this month.</p>
                            <div className='calendar'>
                                {Array.from({ length: days }, (_, i) => (
                                    <div
                                        key={i}
                                        className={`day-box ${streaks[task][i] ? 'done' : ''}`}
                                        onClick={() => toggleDay(task, i)}
                                    >
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


