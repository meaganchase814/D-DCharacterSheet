import React, { Component } from 'react';
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
      diceRoll20: 0,
      diceRoll12: 0,
      diceRoll06: 0,
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
    
    this.handleAcrobaticsChange = this.handleAcrobaticsChange.bind(this);
    this.handleAnimalHandlingChange = this.handleAnimalHandlingChange.bind(this);
    this.handleArcanaChange = this.handleArcanaChange.bind(this);
    this.handleAthleticsChange = this.handleAthleticsChange.bind(this);
    this.handleDeceptionChange = this.handleDeceptionChange.bind(this);
    this.handleHistoryChange = this.handleHistoryChange.bind(this);
    this.handleInsightChange = this.handleInsightChange.bind(this);
    this.handleIntimidationChange = this.handleIntimidationChange.bind(this);
    this.handleInvestigationChange = this.handleInvestigationChange.bind(this);
    this.handleMedicineChange = this.handleMedicineChange.bind(this);
    this.handleNatureChange = this.handleNatureChange.bind(this);
    this.handlePerceptionChange = this.handlePerceptionChange.bind(this);
    this.handlePerformanceChange = this.handlePerformanceChange.bind(this);
    this.handlePersuasionChange = this.handlePersuasionChange.bind(this);
    this.handleReligousChange = this.handleReligousChange.bind(this);
    this.handleSlightofHandChange = this.handleSlightofHandChange.bind(this);
    this.handleStealthChange = this.handleStealthChange.bind(this);
    this.handleSurvivalChange = this.handleSurvivalChange.bind(this);

    
    this.diceRoll20 = this.diceRoll20.bind(this);
    this.diceRoll12 = this.diceRoll12.bind(this);
    this.diceRoll06 = this.diceRoll06.bind(this);
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

  diceRoll20(event) {
    let roll = Math.floor(Math.random()* 20 + 1)
    this.setState({diceRoll20: roll})
  }
  diceRoll12(event) {
    let rolls = Math.floor(Math.random()* 12 + 1)
    this.setState({diceRoll12: rolls})
  }
  diceRoll06(event) {
    let rolls = Math.floor(Math.random()* 6 + 1)
    this.setState({diceRoll06: rolls})
  }
  handleAcrobaticsChange(event) {
    this.setState({acrobatics: event.target.value});
  }
  handleAnimalHandlingChange(event) {
    this.setState({animalHandling: event.target.value});
  }
  handleArcanaChange(event) {
    this.setState({arcana: event.target.value});
  }
  handleAthleticsChange(event) {
    this.setState({athletics: event.target.value});
  }
  handleDeceptionChange(event) {
    this.setState({deception: event.target.value});
  }
  handleHistoryChange(event) {
    this.setState({history: event.target.value});
  }
  handleInsightChange(event) {
    this.setState({insight: event.target.value});
  }
  handleInvestigationChange(event) {
    this.setState({investigation: event.target.value});
  }
  handleIntimidationChange(event) {
    this.setState({intimidation: event.target.value});
  }
    
  handleMedicineChange(event) {
    this.setState({medicine: event.target.value});
  }
  handleNatureChange(event) {
    this.setState({nature: event.target.value});
  }
  handlePerceptionChange(event) {
    this.setState({perception: event.target.value});
  }
  handlePerformanceChange(event) {
    this.setState({performance: event.target.value});
  }
  handlePersuasionChange(event) {
    this.setState({persuasion: event.target.value});
  }
  handleReligousChange(event) {
    this.setState({religous: event.target.value});
  }
  handleSlightofHandChange(event) {
    this.setState({slightofhand: event.target.value});
  }
  handleStealthChange(event) {
    this.setState({stealth: event.target.value});
  }
  handleSurvivalChange(event) {
    this.setState({survival: event.target.value});
  }

  render() {

    return (
      <div className="background">
            <table className="characterTable">
              <tbody>
                <tr>
                  <td className="character">
                    <label>Name: </label>
                    <input onChange={this.handleNameChange} type="text" /></td>
                
                    <td className="character"><label>Race: </label>  
                    <select onChange={this.handleRaceChange}>
                    <option value="race">Race</option>
                    <option value="human">Human</option>
                    <option value="elf">Elf</option>
                    <option value="orc">Orc</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="halfling">Halfling</option>
                    </select>
                  </td> 
            
                  <td className="character">
                    <label>Class: </label>  
                    <select onChange={this.handleClassChange} >
                    <option value="class">Class</option>
                    <option value="bard">Bard</option>
                    <option value="monk">Monk</option>
                    <option value="druid">Druid</option>
                    <option value="paladin">Paladin</option>
                    <option value="rogue">Rogue</option>
                    <option value="ranger">Ranger</option>
                    <option value="wizard">Wizard</option>
                    </select>
                  </td> 
            
                  <td className="character">
                    <label>Level: </label>
                    <input onChange={this.handleLevelChange} type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
            <br></br>
          
            <table className="dice">
              <tbody>
                <tr>
                  <td>
                    <img className="diceRoll" alt=""  src="https://cdn.pixabay.com/photo/2017/08/31/04/01/d20-2699387_960_720.png" onClick={this.diceRoll20}  />
                    <div>{this.state.diceRoll20}</div>
                  </td>
                  <td>
                    <img className="diceRoll" alt=""  src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/107324/Dice7.png" onClick={this.diceRoll12}  />
                    <div>{this.state.diceRoll12}</div>
                  </td>
                  <td>
                  <img className="diceRoll" alt=""  src="https://cdn2.iconfinder.com/data/icons/roleplay-and-tabletop-dice-glyph/430/2_glyph-512.png" onClick={this.diceRoll06}  />
                    <div>{this.state.diceRoll06}</div>
                  </td>
                </tr>
              </tbody>
            </table>  
            
          
          <br></br>
          <br></br>

          <table className="attributesTable">
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                  
                  <label class="container">Strength:</label></td>
              </tr>
              <tr>
                <td><input onChange={this.handleStrengthChange} type="text" className="textbox" /></td>
              </tr>
              <tr>
                <td>
                <input type="checkbox" />
                  <span class="checkmark"></span>
                  <label class="container">Dexterity:</label></td>
              </tr>
              <tr>
                <td><input onChange={this.handleDexterityChange} type="text" className="textbox" /></td>
              </tr>
              <tr>
                <td><input type="checkbox" />
                  <span class="checkmark"></span>
                  <label class="container">Constitution:</label></td>
              </tr> 
              <tr>
                <td><input onChange={this.handleConstitutionChange} type="text" className="textbox" /></td>
              </tr>
              <tr>
                <td><input type="checkbox" />
                  <span class="checkmark"></span>
                  <label class="container">Intelligent:</label></td>
              </tr> 
              <tr>
                <td><input onChange={this.handleIntelligentChange} type="text" className="textbox" /></td>
              </tr>
              <tr>
                <td><input type="checkbox" />
                  <span class="checkmark"></span>
                  <label class="container">Wisdom:</label></td>
              </tr>
              <tr>
                <td><input onChange={this.handleWisdomChange} type="text" className="textbox" /></td>
              </tr>
              <tr>
                <td><input type="checkbox" />
                  <span class="checkmark"></span>
                  <label class="container">Charisma:</label></td>
              </tr> 
              <tr>
                <td><input onChange={this.handleCharismaChange} type="text" className="textbox" /></td>
              </tr>
            </tbody>
          </table>
          <table class="attributesTable">
            <tbody>
              <tr><td>Ability Checks</td></tr>
              <br></br>
                <tr>
                  <td><label>Acrobatics:
                  <input onChange={this.handleAcrobaticsChange} type="text" className="textbox"/></label>
                  </td>

                  <td><label>Medicine:
                  <input onChange={this.handleMedicineChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
          
                <tr>
                  <td><label>Animal Handling:
                    <input onChange={this.handleAnimalHandlingChange} type="text" className="textbox"/></label>
                  </td>
                  
                  <td><label>Nature:
                    <input onChange={this.handleNatureChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
          
                <tr>
                  <td><label>Arcana:
                    <input onChange={this.handleArcanaChange} type="text" className="textbox"/></label>
                  </td>
                  <td><label>Perception:
                    <input onChange={this.handlePerceptionChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
                <tr>
                  <td><label>Athletics:
                    <input onChange={this.handleAthleticsChange} type="text" className="textbox"/></label>
                  </td>
                  <td><label>Performance:
                    <input onChange={this.handlePerformanceChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
                <tr>
                  <td><label>Deception:
                    <input onChange={this.handleDeceptionChange} type="text" className="textbox"/></label>
                  </td>
                  <td><label>Persuasion:
                    <input onChange={this.handlePersuasionChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
                <tr>
                  <td><label>History:
                    <input onChange={this.handleHistoryChange} type="text" className="textbox"/></label>
                  </td>
                  <td><label>Religous:
                    <input onChange={this.handleReligousChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
                <tr>
                  <td><label>Insight:
                    <input onChange={this.handleInsightChange} type="text" className="textbox"/></label>
                  </td>
                  <td><label>Slight of Hand:
                    <input onChange={this.handleSlightofHandChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
                <tr>
                  <td><label>Intimidatoin:
                    <input onChange={this.handleIntimidationChange} type="text" className="textbox"/></label>
                  </td>
                  <td><label>Stealth:
                    <input onChange={this.handleStealthChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
                <tr>
                  <td><label>Investigation:
                    <input onChange={this.handleInvestigationChange} type="text" className="textbox"/></label>
                  </td>
                  <td><label>Survival:
                    <input onChange={this.handleSurvivalChange} type="text" className="textbox"/></label>
                  </td>
                </tr>
              </tbody>
            </table>
          <br></br>
          <br></br>
        
          <div className="divider"></div><br></br>

          <div>
            <table className="characterSheet">
            <tbody>
              <tr>
                <td>
                  Name:
                </td>
                <td class="info">
                  {this.state.name}
                </td>
              </tr>
              <tr>
                <td>
                  Race:
                </td>
                <td class="info">
                  {this.state.race}
                </td>
              </tr>
              <tr>
                <td>
                  Class:
                </td>
                <td class="info">
                  {this.state.class}
                </td>
              </tr>
              <tr>
                <td>
                  Level:
                </td>
                <td class="info">
                  {this.state.level}
                </td>
              </tr>
            </tbody>
           </table>
            <br></br><br></br>
            <table className="characterSheet">
              <tbody>
                <tr>
                  <td>Strength: </td>
                  <td className="info">{this.state.strength}</td>
                </tr>
                <tr>
                  <td>Dexterity: </td>
                  <td className="info">{this.state.dexterity}</td>
                </tr>
                <tr> 
                  <td>Constitution: </td>
                  <td className="info">{this.state.constitution}</td>
                </tr>
                <tr>
                  <td>Intelligent: </td>
                  <td className="info">{this.state.intelligent}</td>
                </tr>
                <tr>
                  <td>Wisdom: </td>
                  <td className="info">{this.state.wisdom}</td>
                </tr>
                <tr>
                  <td>Charisma: </td>
                  <td className="info">{this.state.charisma}</td>
                </tr>
              </tbody>
            </table>
            <table className="characterSheet">
              <tbody>
                <tr>
                  <td>Acrobatics: </td>
                  <td className="info">{this.state.acrobatics}</td>
                  <td>Medicine: </td>
                  <td className="info">{this.state.medicine}</td>
                </tr>
                <tr>
                  <td>Animal Handling: </td>
                  <td className="info">{this.state.animalHandling}</td>
                  <td>Nature: </td>
                  <td className="info">{this.state.nature}</td>
                </tr>
                <tr>
                  <td>Arcana: </td>
                  <td className="info">{this.state.arcana}</td>
                  <td>Perception: </td>
                  <td className="info">{this.state.perception}</td>
                </tr>
                <tr>
                  <td>Athletics: </td>
                  <td className="info">{this.state.athletics}</td>
                  <td>Performance: </td>
                  <td className="info">{this.state.performance}</td>
                </tr>
                <tr>
                  <td>Deception: </td>
                  <td className="info">{this.state.deception}</td>
                  <td>Perception: </td>
                  <td className="info">{this.state.perception}</td>
                </tr>
                <tr>
                  <td>History: </td>
                  <td className="info">{this.state.history}</td>
                  <td>Religious: </td>
                  <td className="info">{this.state.religious}</td>
                </tr>
                <tr>
                  <td>Insight: </td>
                  <td className="info">{this.state.insight}</td>
                  <td>Slight of Hand: </td>
                  <td className="info">{this.state.slightofhand}</td>
                </tr>
                <tr>
                  <td>Intimidation: </td>
                  <td className="info">{this.state.intimidation}</td>
                  <td>Stealth: </td>
                  <td className="info">{this.state.stealth}</td>
                </tr>
                <tr>
                  <td>Investigation: </td>
                  <td className="info">{this.state.investigation}</td>
                  <td>Survival: </td>
                  <td className="info">{this.state.survival}</td>
                </tr>
              </tbody>
            </table>

          </div>
      </div>
      
    );
    
    
  }
}

export default App;
