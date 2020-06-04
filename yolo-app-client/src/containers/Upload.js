import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./Upload.css";
import { s3Upload } from "../libs/awsLib";
import { API } from "aws-amplify";

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.file = null;
        this.state = {
            isLoading: null,
            content: ""
        };
    }

    validateForm() {
        return this.state.content.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleFileChange = event => {
        this.file = event.target.files[0];
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
            alert(`Please pick a file smaller than
        ${config.MAX_ATTACHMENT_SIZE / 1000000} MB.`);
            return;
        }
        this.setState({ isLoading: true });
        try {
            const attachment = this.file
                ? await s3Upload(this.file)
                : null;
            await this.uploadImage({
                attachment
            });
            this.props.history.push("/");
        } catch (e) {
            alert(e);
            this.setState({ isLoading: false });
        }
    }
    uploadImage(image) {
        return API.post("images", "/images", {
            body: image
        });
    }

    render() {
        return (
            <div className="Upload">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="file">
                        <ControlLabel>Image</ControlLabel>
                        <FormControl onChange={this.handleFileChange} type="file"
                        /></FormGroup>
                    <LoaderButton
                        block
                        bsStyle="primary"
                        bsSize="large"
                        //disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Upload"
                        loadingText="Uploading..."
                    />
                </form>
            </div>
        );
    }
}