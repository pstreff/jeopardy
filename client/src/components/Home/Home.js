import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="outerBox">
            <div className="joinGameBox">
                <Link to="/join">
                    <button type="button" className="joinBtn">
                        Join Game
                    </button>
                </Link>
            </div>
            <div className="loginBox">
                Login
            </div>
            {/* TODO: this page should have 2 "Boxes" one with "Join Game" and one with "Admin Login" */}
        </div>
    );
}

export default Home;
