import { useNavigate } from 'react-router-dom';
import './App.css';

export const DruhaStranka = () => {
    const navigate = useNavigate()
    return (
        <div className="App">
            <header className="App-header">
                Druhá Stránka
                <button onClick={() => {
                    navigate("/")
                }}>Home</button>
            </header>
        </div>
    )
}