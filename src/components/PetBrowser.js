import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
         {this.props.pets.map((pet, i) => <Pet key={i} pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)}
    </div>
  }
}

export default PetBrowser
