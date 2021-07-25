import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = ({candidate1, candidate2}) => {

    return (
        <div className="container mb-5 mt-3">

            <div className="mb-5">
                <h3>Welcome to Election Dapp</h3>
                <h5>Please cast your vote</h5>
            </div>
            
            <div className="d-flex justify-content-center">
                <table class="table w-75">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Candidate Name</th>
                            <th scope="col">Votes Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{ candidate1.id }</th>
                            <td>{ candidate1.name }</td>
                            <td>{ candidate1.voteCount }</td>
                        </tr>
                        <tr>
                            <th scope="row">{ candidate2.id }</th>
                            <td>{ candidate2.name }</td>
                            <td>{ candidate2.voteCount }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Body;