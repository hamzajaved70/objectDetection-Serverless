import { Storage } from "aws-amplify";
export async function s3Upload(file) {
    const filename = `${Date.now()}-${file.name}`;
    const stored = await Storage.put(filename, file, {
        contentType: file.type
    });
    return stored.key;
}
/*
export async function s3UploadPublic(file) {
    const filename = `${Date.now()}-${file.name}`;
    SetS3Config("imagefordetection", "public");
    Storage.put(filename, file, { contentType: file.type })
        .then(result => {
        this.upload = null;
        this.setState({ response: "Success uploading file!" });
        })
        .catch(err => {
        this.setState({ response: `Cannot uploading file: ${err}` });
        });
}*/