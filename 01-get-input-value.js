/*
Note: Please make your reactJS project and update the App.js code with this
*/

import {useState} from "react"

export default function App() {
  // state to store the value of input
  const [text, setText] = useState("")

  return (
    <main>
         <input placeholder="write..." 
           onChange={
            (e) => setText(e.target.value)
           }
         />
         // print the text value 
         <h4>{text}</h4>
             
         // print the length of the text
         <h4>Length: {text.length} </h4>
    </main>
  )
}
