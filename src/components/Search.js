
import React from 'react';
import NamesContainer from './NamesContainer'


class Search extends React.Component {
    state={
       names: [
          'Bitcoin',
          'Ethereum',
          'Stellar',
          'EOS',
          'Chainlink',
          'Monero',
          'Tron',
          'Theta'
       ],
       searchTerm:''
    }
    editSearchTerm = (e) => {
       this.setState({searchTerm: e.target.value})
    }
 
    dynamicSearch = () => {
      return  this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
 
    render(){
       return (
          <div style = {{itemsAlign: 'right', paddingTop: '20px'}}>
            <input 
               type='text' 
               value={this.state.searchTerm} 
               onChange={this.editSearchTerm} 
               placeholder = 'Search CryptoCurrency, Rates and Prices'
             />
             <br></br>
             <h3>Your Search Result </h3>
             <NamesContainer names= {this.dynamicSearch()} />
          </div>
       )
    }
 
 }
 
 

export default Search; 