import { useState } from "react"
import Header from "./components/header/Header"


function App() {
    const [city, setCity] = useState<string>("")

    return (
        <div className="p-3">
            <Header />
        </div>
    )
}

export default App
