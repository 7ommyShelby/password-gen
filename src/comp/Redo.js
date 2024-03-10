import React from 'react'
import './redo.css'
import { useState } from 'react';

const Redo = () => {

    const [length, setlength] = useState();

    const [password, setPassword] = useState("");

    const [hasCapital, setHasCapital] = useState(false);
    const [hasSmall, setHasSmall] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSymbol, setHasSymbol] = useState(false);


    function generator() {

        let charstr = ""

        if (!hasCapital && !hasSmall && !hasNumber && !hasSymbol) {
            alert('check boxes')
            return
        }
        if (length < 8 || length > 50) {
            alert('read the instruction')
            return
        }


        if (hasCapital) {
            charstr += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        if (hasSmall) {
            charstr += 'abcdefghijklmnopqrstuvwxyz'
        }
        if (hasNumber) {
            charstr += '0123456789'
        }
        if (hasSymbol) {
            charstr += '!@#$%^&*()_+~`|}{[]:;?><,./-='
        }

        let res = "";

        for (let i = 0; i < length; i++) {
            let x = Math.floor(Math.random() * charstr.length);
            res += charstr[x];
        }
        setPassword(res)
        console.log(charstr);
    }

    return (
        <section>
            <h1>Password Generator</h1>

            <div className='input'>
                <label htmlFor="length">Length : {length} </label>

                {/* <input onChange={(e) => {
                    setlength(e.target.value)
                }} type="number" name="" id="length" required min={8} max={50} /> */}

                <span>(Select between <strong>8 to 32 characters</strong>)</span>
            </div>

            <input className='slider' onChange={(e) => {
                    setlength(e.target.value)
                }}
                type="range" name="" id="" defaultValue={8} min={0} max={100}/>

            <div className='pass'><p>Password :  {password} </p></div>

            <div className='container'>

                <div className='right'>

                    <button className='gen' onClick={generator}>Generate</button>

                    <button className='copy' onClick={(e) => {
                        navigator.clipboard.writeText(password)
                    }}>COPY</button>

                </div>


                <div className="parameteres">
                    <div>
                        <input onChange={(e) => {
                            setHasCapital(e.target.checked)
                        }} type="checkbox" name="" id="cap" /> <label htmlFor="cap">Include Capital letters (A-Z)</label>
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setHasSmall(e.target.checked)
                        }} type="checkbox" name="" id="small" /> <label htmlFor="cap">Include Small letters (a-z)</label>
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setHasNumber(e.target.checked)
                        }} type="checkbox" name="" id="num" /> <label htmlFor="cap">Include Numbers (0-9)</label>
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setHasSymbol(e.target.checked)
                        }} type="checkbox" name="" id="spchar" /> <label htmlFor="cap">Include Special characters (!@#$)</label>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Redo
