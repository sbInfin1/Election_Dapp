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
      // this.myFunction();

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

  myFunction = async () => {
    this.candidate1 = await this.election.methods.candidates(1).call();
    this.candidate2 = await this.election.methods.candidates(2).call();
    this.candidate1Name = this.candidate1.name;
    console.log(this.candidate1Name);
    console.log(this.candidate1);
    console.log(this.candidate2);
  };

  voteCandidate = async(candidateId) => {

    try {
      let result = await this.election.methods
      .vote(candidateId)
      .send({from: this.currentAccount});
    } catch(e) {
        console.log(e);
    }

    // this.setState({ loaded: false });
    // let result = await this.election.methods
    // .vote(candidateId)
    // .send({from: this.currentAccount});

    // console.log(result);

    // .on('transactionhash', () => {
    //   console.log("successsfully ran");
    // });
    // this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">Election Dapp</a>
          
          <ul className="navbar-nav">
            <li className="nav-item text-white">Account address: {this.currentAccount}</li>
          </ul>
        </nav>

        <div className="container">
          <Body candidate1={this.candidate1} 
          candidate2={this.candidate2} 
          voteCandidate={this.voteCandidate}
          account={this.currentAccount}/>
        </div>
        
      </div>
    );
  }
}

export default App;
