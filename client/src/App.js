import React, { Component } from "react";
import ElectionContract from "./contracts/Election.json";
import getWeb3 from "./getWeb3";
// import Navbar from 'react-bootstrap/Navbar';

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Body from "./Body.js";

class App extends Component {
  state = { loaded: false };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();
      this.currentAccount = this.accounts[0];

      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();
      const deployedNetwork = ElectionContract.networks[this.networkId];
      this.election = new this.web3.eth.Contract(
        ElectionContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log(this.election);

      this.candidate1 = await this.election.methods.candidates(1).call();
      this.candidate2 = await this.election.methods.candidates(2).call();

      this.candidateVoted = 0;

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ loaded: true });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  voteCandidate = async(candidateId) => {

    let result = await this.election.methods
    .vote(candidateId)
    .send({from: this.currentAccount});

    window.location.reload();
    console.log(result);
  };

  onchange = (e) => {
      this.candidateVoted = e.target.value;
      console.log(this.candidateVoted);
  };

  onsubmit = () => {
      console.log("candidateVoted: ", this.candidateVoted);
      const candId = Number(this.candidateVoted);
      console.log("candId: ", candId);
      if(candId === 1 || candId === 2){
          this.voteCandidate(candId);
      }
      else{
          window.alert("Error occurred in submission.");
      }
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Election Dapp</a>

            <span class="navbar-text">
              Account address: {this.currentAccount}
            </span>
          </div>
        </nav>

        <Body candidate1={this.candidate1} candidate2={this.candidate2} />

        <div className="d-flex justify-content-center">
          <div className="mb-3 w-50">
              <select id="form-select" className="form-select" onChange={this.onchange}>
                  <option defaultValue>Select</option>
                  <option value="1">{ this.candidate1.name }</option>
                  <option value="2">{ this.candidate2.name }</option>
              </select>
          </div>
        </div>
        
        <button type="button" className="btn btn-primary" onClick={this.onsubmit}>Vote</button>
        
      </div>
    );
  }
}

export default App;
