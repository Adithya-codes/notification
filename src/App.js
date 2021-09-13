import Notification from "./components/Notification";
import Form from "./components/Form";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        {" "}
        Notification Arena{" "}
      </h1>
      <Modal />

      <Form />

      <Notification />
    </div>
  );
}

export default App;
