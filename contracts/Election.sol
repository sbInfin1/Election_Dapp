pragma solidity ^0.6.0;

contract Election {
    
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    
    uint public candidateCount;
    
    // Mapping to store the candidates uniquely identified by their id
    mapping(uint => Candidate) public candidates;
    
    // Mapping to record whether a particular address has voted or not
    mapping(address => bool) public voted;
    
    event VoteCasted(uint id, string name, uint voteCount);
    
    constructor() public {
        addCandidate("Donald Trump");
        addCandidate("Barack Obama");
    }
    
    // Function to add a new Candidate
    function addCandidate(string memory name) private {
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, name, 0);
    }
    
    function vote(uint _id) public {
        // Make sure that the person has not voted before
        require(voted[msg.sender] == false, "You have voted once before. No second vote.");
        // Make sure that _id is available
        require(candidates[_id].id != 0, "The id does not exist.");
        candidates[_id].voteCount++;
        voted[msg.sender] = true;
        emit VoteCasted(_id, candidates[_id].name, candidates[_id].voteCount);
    }
}