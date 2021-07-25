import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = ({candidate1, candidate2, voteCandidate, account}) => {

    const [candidateVoted, setCandidateVoted] = useState("");

    const onChange = (e) => {
        setCandidateVoted(e.target.value);
        console.log(candidateVoted);
    };

    const onsubmit = (e) => {
        e.preventDefault();
        console.log("Candidate voted: ", candidateVoted);
        console.log("CandidateVoted.id: ", candidateVoted.id);
        const candId = Number(candidateVoted);
        console.log("candId: ", candId);
        if(candId === 1 || candId === 2){
            voteCandidate(candId);
        }
        else{
            window.alert("Error occurred in submission.");
        }
    };

    return (
        <div className="mt-4 textcenter" style={{ color: "#000000"}}>
            <h2>Election Results</h2>
            <hr style={{
                width: "70%",
                borderStyle: "solid",
                borderWidth: "2px",
                bordercolor: "#000000",
            }}/>

            <div className="p-3 ml-auto mr-auto" style={{ width: "40%" }}>
                <div className="row ml-auto mr-auto" style={{ width: "90%" }}>
                    <div className="col">
                        <p>#</p>
                    </div>
                    <div className="col">
                        <p>Name</p>
                    </div>
                    <div className="col">
                        <p>Votes</p>
                    </div>
                </div>
                <hr style={{ width: "90%", borderStyle: "solid", bordercolor: "#000000" }}/>
                <div className="row ml-auto mr-auto mt-2 mb-2" style={{ width: "90%" }}>
                    <div className="col">
                        <p>{ candidate1.id }</p>
                    </div>
                    <div className="col">
                        <p>{ candidate1.name }</p>
                    </div>
                    <div className="col">
                        <p>{ candidate1.voteCount }</p>
                    </div>
                </div>
                <hr style={{ width: "90%", borderStyle: "solid", bordercolor: "#000000" }}/>
                <div className="row ml-auto mr-auto mt-2 mb-2" style={{ width: "90%" }}>
                    <div className="col">
                        <p>{ candidate2.id }</p>
                    </div>
                    <div className="col">
                        <p>{ candidate2.name }</p>
                    </div>
                    <div className="col">
                        <p>{ candidate2.voteCount }</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onsubmit}>
                <div className="mb-3">
                    <label for="form-select" className="form-label">Cast Your Vote</label>
                    <select id="form-select" className="form-select" onChange={onChange}>
                        <option selected>Select</option>
                        <option value="1">{ candidate1.name }</option>
                        <option value="2">{ candidate2.name }</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Vote</button>
            </form>
        </div>
    )
}

export default Body;