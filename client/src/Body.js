import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = ({candidate1, candidate2}) => {

    // const [candidateVoted, setCandidateVoted] = useState("");

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
        </div>
    )
}

export default Body;