// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { createGoal } from '../features/goals/goalSlice'

// function GoalForm() {
//     const [text, setText] = useState('')

//     const dispatch = useDispatch()

//     const onSubmit = e => {
//         e.preventDefault()

//         dispatch(createGoal({text}))
//         setText('')
//     }


//   return (
//     <>
//       <section className="form">
//         <form onSubmit={onSubmit}>
//             <div className="form-group">
//                 <label htmlFor="text">Goal</label>
//                 <input type="text" name="text" id="text" value={text}
//                 onChange={(e)=>setText(e.target.value)}/>
//             </div>
//             <div className="form-group">
//                 <button className="btn btn-block" type='submit'>
//                     Add Goal
//                 </button>
//             </div>
//         </form>
//       </section>
//     </>
//   )
// }

// export default GoalForm



import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
    const [text, setText] = useState('')
    const [error, setError] = useState(false) // State to track error status

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        
        if (text.trim().length === 0) {
            setError(true); // Set error state to true if input is empty or only spaces
            return; // Do not proceed with submission
        }

        dispatch(createGoal({text}))
        setText('')
        setError(false) // Reset error state after successful submission
    }

    const handleInputChange = e => {
        setText(e.target.value)
        setError(false); // Reset error state when input changes
    }

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name="text" id="text" value={text}
                onChange={handleInputChange}/>
            </div>
            {error && <p style={{ color: 'red' }}>Please enter a valid goal</p>} {/* Error message */}
            <div className="form-group">
                <button className="btn btn-block" type='submit'>
                    Add Goal
                </button>
            </div>
        </form>
      </section>
    </>
  )
}

export default GoalForm

