import React, { useState } from "react";
import MyForm from "./form";
import notes from "../notes";
import HighlightIcon from "@mui/icons-material/Highlight";
function Header(props) {
    const [trueOrFals, setTrueOrFals] = useState(false);
    const [formData, setFormData] = useState({ input1: "", input2: "" });

    function buttonClicked() {
        setTrueOrFals(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Input 1:", formData.input1);
        console.log("Input 2:", formData.input2);
        const newElement={
            key:notes[notes.length-1].key+1,
            title:formData.input1,
            content:formData.input2
        };    
        setNotes((prevNotes) => [...prevNotes, newElement]);
        // You can add further logic here to handle the form data, like sending it to a server or updating state.
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function renderConditionally() {
        if (trueOrFals) {
            return (
                <div className="container">
                    <h2>Input Form</h2>
                    <form id="myForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="input1">Input 1:</label>
                            <input type="text" id="input1" name="input1" value={formData.input1} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input2">Input 2:</label>
                            <input type="text" id="input2" name="input2" value={formData.input2} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            );
        }
    }

    return (
        <header>
            <h1>Narsi's Keeper App</h1>
            {/* <button className="beautiful-button" onClick={buttonClicked}>add</button>
            {renderConditionally()} */}
             <button onClick={props.callFunction} className="beautiful-button" style={{}}>
                {props.FormVisible ? "Hide Form" : "Add New Note"}
            </button>

        </header>
    );
}

export default Header;
