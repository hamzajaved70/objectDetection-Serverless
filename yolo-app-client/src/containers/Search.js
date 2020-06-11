import React, { Component } from "react";
import "./Search.css";
import axios from 'axios';



export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags : '',
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
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

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

          </div>
        )
    }
}
