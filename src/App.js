import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      race: "",
      class: "",
      level: 1,
      strength: 0,
      dexterity: 0, 
      constitution: 0,
      intelligent: 0,
      wisdom: 0,
      charisma: 0,
      diceRoll: 0,
    }
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRaceChange = this.handleRaceChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleStrengthChange = this.handleStrengthChange.bind(this);
    this.handleDexterityChange = this.handleDexterityChange.bind(this);
    this.handleConstitutionChange = this.handleConstitutionChange.bind(this);
    this.handleIntelligentChange = this.handleIntelligentChange.bind(this);
    this.handleWisdomChange = this.handleWisdomChange.bind(this);
    this.handleCharismaChange = this.handleCharismaChange.bind(this);
    this.diceRoll = this.diceRoll.bind(this);
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleRaceChange(event) {
    this.setState({race: event.target.value});
  }
  handleClassChange(event) {
    this.setState({class: event.target.value});
  }
  handleLevelChange(event) {
    this.setState({level: event.target.value});
  }
  handleStrengthChange(event) {
    this.setState({strength: event.target.value});
  }
  handleDexterityChange(event) {
    this.setState({dexterity: event.target.value});
  }
  handleConstitutionChange(event) {
    this.setState({constitution: event.target.value});
  }
  handleIntelligentChange(event) {
    this.setState({intelligent: event.target.value});
  }
  handleWisdomChange(event) {
    this.setState({wisdom: event.target.value});
  }
  handleCharismaChange(event) {
    this.setState({charisma: event.target.value});
  }  

  diceRoll(event) {
    let roll = Math.floor(Math.random()* 20 + 1)
    this.setState({diceRoll: roll})
  }
  

  render() {

    return (
      <div>
          <table className="characterTable">
          <tbody>
            <tr>
        <td><label>Name: </label>
        <input onChange={this.handleNameChange} type="text" />
       </td>
        <td><label>Race: </label>  
        <select onChange={this.handleRaceChange}>
        <option value="human">Human</option>
        <option value="elf">Elf</option>
        <option value="orc">Orc</option>
        <option value="dwarf">Dwarf</option>
        <option value="halfling">Halfling</option>
        </select> 
        </td>
        <td><label>Class: </label>  
        <select onChange={this.handleClassChange}>
        <option value="bard">Bard</option>
        <option value="monk">Monk</option>
        <option value="druid">Druid</option>
        <option value="paladin">Paladin</option>
        <option value="rogue">Rogue</option>
        <option value="ranger">Ranger</option>
        <option value="wizard">Wizard</option>
        </select> 
        </td>
        <td><label>Level: </label>
        <input onChange={this.handleLevelChange} type="text" />
        </td>
        </tr>
        </tbody>
        </table>

        <div className="diceRoll">
          <button onClick={this.diceRoll}> DiCe RoLl </button>
          <div>{this.state.diceRoll}</div>
        </div>

        <br></br>
        <table className="attributesTable">
        <tbody>
        <tr>
          <td><label>
          Strength:  
        </label></td></tr>
        <tr>
          <td><input onChange={this.handleStrengthChange} type="text" className="input" /></td>
        </tr>
        <tr><td><label>
          Dexterity:  
        </label></td></tr>
        <tr><td>
        <input onChange={this.handleDexterityChange} type="text" /></td>
        </tr>
        <tr><td><label>
          Constitution: 
        </label></td></tr> 
        <tr><td>
        <input onChange={this.handleConstitutionChange} type="text" /></td>
        </tr>
        <tr><td><label>
          Intelligent:  
        </label></td></tr> 
        <tr><td>
        <input onChange={this.handleIntelligentChange} type="text" /></td>
        </tr>
        <tr><td><label>
          Wisdom:  
        </label></td></tr>
        <tr><td>
        <input onChange={this.handleWisdomChange} type="text" /></td>
        </tr>
        <tr><td><label>
          Charisma:  
        </label></td></tr> 
        <tr><td>
        <input onChange={this.handleCharismaChange} type="text" /></td>
        </tr>
        </tbody>
        </table>
        <br></br>
        <br></br>
      

        <div>
          <div className="characterSheet">
            <div>Name: {this.state.name}</div>
            <div>Race: {this.state.race}</div>
            <div>Class: {this.state.class}</div>
            <div>Level: {this.state.level}</div>
          </div>
          <br></br><br></br>
          <div className="characterSheet">
            <div>Strength: {this.state.strength}</div>
            <div>Dexterity: {this.state.dexterity}</div>
            <div>Constitution: {this.state.constitution}</div>
            <div>Intelligent: {this.state.intelligent}</div>
            <div>Wisdom: {this.state.wisdom}</div>
            <div>Charisma: {this.state.charisma}</div>
          </div>
        </div>
      </div>
    );
    
  }
}

export default App;
