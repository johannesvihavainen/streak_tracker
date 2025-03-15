import { useState } from 'react'
import StreakTracker from './components/StreakTracker'


export default function App() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const [selectedMonth, setSelectedMonth] = useState(0) // 0 defaults to january

  const daysInMonth = (monthIndex) => {
    const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return daysPerMonth[monthIndex]
  }

  return (
    <>
      {/* <p>{months[selectedMonth]}</p> */}
      <div className='streak-container'>
        <div className='month-nav'>
          {months.map((month, index) => (
            <button
              key={index}
              className={selectedMonth === index ? "active" : ""}
              onClick={() => setSelectedMonth(index)}
            >
              {month}
            </button>
          ))}
        </div>
        <div className="streak-tracker">
        <StreakTracker month={months[selectedMonth]} days={daysInMonth(selectedMonth)} />
        </div>
      </div>
    </>
  )
}


