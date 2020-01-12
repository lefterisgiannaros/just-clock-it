import React, {useState, useEffect} from 'react'

import firebase from '../firebase'

function useTimes(){
    const [times, setTimes] = useState([])

    useEffect(() =>{
        firebase
            .firestore()
            .collection('Times')
            .onSnapshot((snapshot) =>{ debugger
                // const newTimes = snapshot.docs.map((doc) =>({
                //     id:doc.id,
                //     ...doc.data()
                // }))

                // setTimes(newTimes)
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
                {times.map((time)=>
                <li key={time.id}>
                    <div className="time-entry">
                        {time.title}
                        <code className="time">{time.time_seconds} seconds</code>
                    </div>
                </li>
                )}
            </ol>
        </div>
    )
}

export default TimesList