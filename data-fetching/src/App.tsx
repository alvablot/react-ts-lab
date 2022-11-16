import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const url: string = `http://sholiday.faboul.se/dagar/v2.1/${year}/${month}/${date}`;

function App() {
    interface Dag {
        dagar: string;
        namnsdag: string[];
    }

    const [nameDays, setNamesDays] = useState<string[]>([]);

    async function fetchData(path: string): Promise<unknown> {
        const response = await axios.get(path);
        const dagar: Dag[] = response.data.dagar;
        const namnsdagar = dagar[0].namnsdag;
        setNamesDays(namnsdagar);
        return dagar;
    }

    useEffect(() => {
        fetchData(url);
    }, []);

    return <div className="App">{nameDays}</div>;
}

export default App;
