import React, { Component } from "react";
import "./Search.css";
import axios from 'axios';



export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags : '',
            result : []
          };
        }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value.split(",")})
      }

    submitHandler = (e) => {

        e.preventDefault()
        console.log(this.state);
        axios.post('https://aeamk3bczc.execute-api.us-east-1.amazonaws.com/query/api/fetchimages', this.state)
            .then(response => {
                  const resultNotFoundMsg = ! response.data.body.links.length
                                      ? 'There are not mroe serach reasult. please try again with a new search'
                                      : '';
                  this.setState( {
                      result: response.data.body.links
                  })
                  console.log(this.state)
            })
            .catch(error => {
                console.log(error)
            })

          }
    renderSearchResult = () => {
        const { result } = this.state;

        if (Object.keys ( result ).length && result.length) {
            return (
                <div className="result-container">
                    { result.map( res => {
                        return (
                            <a >
                                {result}
                            </a>

                        )
                    }) }

                </div>
            )
        }
    }


    render() {

        const { tags } = this.state
        return (
          <div>
              <form onSubmit= { this.submitHandler }>
                  <div>
                    <input
                        type="text"
                        name="tags"
                        value={tags}
                        onChange= { this.changeHandler }/>

                  </div>
                  <button type="submit"> submit </button>
              </form>
              {this.renderSearchResult()}
          </div>
        )
    }
}
