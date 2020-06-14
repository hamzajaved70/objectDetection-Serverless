import React, { Component } from "react";
import "./Search.css";
import axios from 'axios';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";




export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags : '',
            result : []
          };
        }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value.split(" ")})
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

          return (
             <div>
                 {result.map(station => <div><a key={station} href={station}> {station} </a></div>)}
             </div>
                );
          }

    render() {

        const { tags } = this.state
        return (

          <div className="Search">
              <h1>Find Query</h1>
              <p>Please enter your query:</p>
              <form onSubmit= { this.submitHandler }>
                  <FormGroup controlId="text" bsSize="large">
                  <div>
                  <ControlLabel>Query</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        name="tags"
                        onChange= { this.changeHandler }/>
                  </div>
                  </FormGroup>
                  <FormGroup controlId="submit" bsSize="large">
                    <LoaderButton
                        block
                        bsSize="large"
                        type="submit"
                        text="Search"
                    />
                  </FormGroup>
              </form>
              <FormGroup controlId="result" bsSize="large">
              {this.renderSearchResult()}
              </FormGroup>
          </div>


        )
    }
}
