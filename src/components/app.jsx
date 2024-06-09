import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";
import AddIcon from '@mui/icons-material/Add';


function App() {
    const [input1,updateInput1]=useState("Add Heading");
    const [input2,updateInput2]=useState("Add Notes");
    const [newArray,updateNewArray]=useState(notes);
    const [isFormVisible, setIsFormVisible] = useState(false);
    function input1Changed(event){
        const i1=event.target.value;
        updateInput1(i1);
    }
    function input2Changed(event){
        const i2=event.target.value;
        updateInput2(i2);
    }
    function addButtonClicked(){
        updateNewArray([...newArray,{title:input1,content:input2}])
        updateInput1("");
        updateInput2("");

        
    }

    function deleteNoteFunction(id){
        updateNewArray((prevArray)=>{
            return prevArray.filter((item,index)=>{
                return index!==id;
            });
        });
    }

    function toggleFormVisibility() {
        setIsFormVisible((prevVisibility) => !prevVisibility);
    }
    return (
        <div className="app-container">
            <Header callFunction={toggleFormVisibility} FormVisible={isFormVisible}/>
           
            {isFormVisible && (
                <div className="top-section">
                    <div className="form_div" style={{ backgroundColor: "transparent" }}>
                        <input 
                            type="text" 
                            placeholder="Add Note Heading" 
                            onClick={() => { updateInput1(""); }} 
                            value={input1} 
                            onChange={input1Changed} 
                        />
                        <input 
                            type="text" 
                            placeholder="Add notes" 
                            onClick={() => { updateInput2(""); }} 
                            value={input2} 
                            onChange={input2Changed} 
                        />
                        <button className="beautiful-button" onClick={addButtonClicked} style={{ backgroundColor: "green" }}>
                            Add
                        </button>
                    </div>
                </div>
            )}

            <div className="bottom-section">
                {newArray.map((note,index) => {
                    return <Note className="note" key={note.key} index={index}title={note.title} content={note.content} deleteNote={deleteNoteFunction}></Note>;
                })}
            </div>

            <Footer/>
        </div>
    );
}

export default App;
