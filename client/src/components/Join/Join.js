import "./Join.css";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

function test(name) {
    console.log(`Hi there, ${name}`);
}

function useCode() {
    let code = new URLSearchParams(useLocation().search);

    return code.get('name') ?? '';
}    

function Join(props) {
    const [code, setCode] = useState('')
    
    useEffect(() => {
        let code = new URLSearchParams(props.location.search);

        setCode(code.get('name') ?? '');
    }, [props.location.search])

    console.log(props.location);
    return (
        <div className="box">
            <form className="form" onSubmit={() => test("John")}>
                <div className="form-input-box">
                    <input className="input" type="text" name="" required />
                    <label className="label">Username</label>
                </div>
                <div className="form-input-box">
                    <input className="input" type="text" name="" value={code} onChange={(e) => setCode(e.target.value)} required />
                    <label className="label">Code</label>
                </div>
                <button type="submit" className="form-join-btn">
                        Join
                </button>
            </form>
        </div>
    );
}

export default Join;
