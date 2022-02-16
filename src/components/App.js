import React, {useEffect, useState} from "react";

function App() {

    const [pic, setPic] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setPic(data.message)
            setIsLoaded(true)
        })
    }, [])


    if (!isLoaded) return <p>Loading...</p>

    return (
        <img
            src= {pic}
            alt= "A Random Dog">
        </img>
    )
}

export default App;