import React, { useEffect, useState } from 'react'
import './home.css'



const Home = () => {

    let char = "abcdefghijklmnopqrstuvwxyz";
    let capchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*()_+?><{}";
    let numbers = "0123456789";

    const [length, setlength] = useState(8);

    const [str, setstr] = useState("");

    const [password, setPassword] = useState("");

    let res = ""

    const [capital, setcapital] = useState(false)
    const [small, setsmall] = useState(false)
    const [num, setnum] = useState(false)
    const [splchr, setsplchr] = useState(false)

    useEffect(() => {

        if (capital) {
            if (!str.includes('capchar')) {
                console.log("includes capital");
                setstr((prev) => prev += capchar)
            }
        } else {
           
            setstr((prev) => {

                let idx1 = prev.indexOf('A');
                let idx2 = prev.indexOf('Z');

                let p1 = prev.slice(0, idx1)
                let p2 = prev.slice(idx2 + 1, prev.length)

                let finalstr = p1 + p2;
                return finalstr
            })
        }
        if (small) {
            if (!str.includes(char)) {
                console.log("includes char");
                setstr((prev) => prev += char)
            }
        } else {
            setstr((prev) => {

                let idx1 = prev.indexOf('a');
                let idx2 = prev.indexOf('z');

                let p1 = prev.slice(0, idx1)
                let p2 = prev.slice(idx2 + 1, prev.length)

                let finalstr = p1 + p2;
                return finalstr
            })
        }

        if (num) {
            if (!str.includes(numbers)) {
                console.log("includes numb");
                setstr((prev) => prev += numbers)
            }
        } else {
            setstr((prev) => {

                let idx1 = prev.indexOf('0');
                let idx2 = prev.indexOf('9');

                let p1 = prev.slice(0, idx1)
                let p2 = prev.slice(idx2 + 1, prev.length)

                let finalstr = p1 + p2;
                return finalstr
            })
        }

        if (splchr) {
            if (!str.includes(symbols)) {
                console.log("includes symbols");
                setstr((prev) => prev += symbols)
            }
        } else {
            setstr((prev) => {

                let idx1 = prev.indexOf('!');
                let idx2 = prev.indexOf('}');

                let p1 = prev.slice(0, idx1)
                let p2 = prev.slice(idx2 + 1, prev.length)

                let finalstr = p1 + p2;
                return finalstr
            })
        }
    }, [capital, small, num, splchr])
    


    function generator() {

        if (!capital && !small && !splchr && !num) {

            alert('check boxes')

        } else {

            for (let i = 0; i < length; i++) {
                let x = Math.floor(Math.random() * str.length);
                res += str[x];
            }

            setPassword(res)
        }

    }

    return (
        <div>
            <h1>Password Generator</h1>

            <div>
                <input onChange={(e) => {
                    setlength(e.target.value)
                }} type="number" name="" id="" value={8} />
                <button onClick={generator}>Generate Password</button>
            </div>
            <span>(Select between <strong>8 to 32 characters</strong>)</span>




            <div className="parameteres">
                <div>
                    <input onChange={(e) => {
                        setcapital(e.target.checked)
                    }} type="checkbox" name="" id="cap" /> <label htmlFor="cap">Include Capital letters</label>
                </div>

                <div>
                    <input onChange={(e) => {
                        setsmall(e.target.checked)
                    }} type="checkbox" name="" id="small" /> <label htmlFor="cap">Include Small letters</label>
                </div>

                <div>
                    <input onChange={(e) => {
                        setnum(e.target.checked)
                    }} type="checkbox" name="" id="num" /> <label htmlFor="cap">Include Numbers</label>
                </div>

                <div>
                    <input onChange={(e) => {
                        setsplchr(e.target.checked)
                    }} type="checkbox" name="" id="spchar" /> <label htmlFor="cap">Include Special characters</label>
                </div>
            </div>

            <p>{password}</p>
        </div>
    )
}

export default Home
