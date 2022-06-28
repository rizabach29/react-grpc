import React from "react";
import "./App.css";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { User } from "./proto/user_pb";
import { ExamplePhotoServiceClient } from "./proto/user_grpc_web_pb";

const client = new ExamplePhotoServiceClient(
    "https://localhost:7060",
    null,
    null
);

function App() {
    const [name, setName] = React.useState(null);
    const [display, setDisplay] = React.useState(null);
    const [email, setEmail] = React.useState(null);

    const onSubmit = () => {
        let user = new User();
        user.setEmail(email);
        user.setName(name);
        user.setDisplayName(display);

        const stream = client.getPhotos(new Empty(), null);
        stream.on("data", function (res) {
            console.log(res);
        });

        client.createUser(user, null, function (err, response) {
            if (err) console.log(err);
            console.log(response.getEmail());
            console.log(response.getName());
            console.log(response.getDisplayName());
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                Name
                <input onChange={(e) => setName(e.target.value)}></input>
                display
                <input onChange={(e) => setDisplay(e.target.value)}></input>
                email
                <input onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={onSubmit}>submit</button>
            </header>
        </div>
    );
}

export default App;
