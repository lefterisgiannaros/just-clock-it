import React, {useState, useEffect} from 'react'

import firebase from '../firebase'

function useTimes(){
    const [times, setTimes] = useState([])

    useEffect(() =>{
        firebase
            .firestore()
            .collection('Times')
            .onSnapshot((snapshot) =>{
                debugger
            })
    }, [])

    return times
}

const TimesList = () =>{
    const times = useTimes()

    return (
        <div>
            <h2>Times List</h2>
            <div>
                <label>Sort By: </label>
                <select>
                    <option>Time (Fastest First)</option>
                    <option>Time (Slowest First)</option>
                    <option disabled>---</option>
                    <option>Title (a-z)</option>
                    <option>Title (z-a)</option>
                </select>
            </div>
            <ol>
                <li>
                    <div className="time-entry">
                        My Entry Title
                        <code className="time">18 seconds</code>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default TimesList