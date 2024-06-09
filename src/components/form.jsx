import React from 'react';

function MyForm() {
    return (
        <div className="container">
            <h2>Input Form</h2>
            <form id="myForm">
                <div className="form-group">
                    <label htmlFor="input1">Input 1:</label>
                    <input type="text" id="input1" name="input1" required />
                </div>
                <div className="form-group">
                    <label htmlFor="input2">Input 2:</label>
                    <input type="text" id="input2" name="input2" required />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default MyForm;
