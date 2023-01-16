function Greeting(props) {
  return (
    <div>
      <h2>Greeting Component</h2>
      <br />

      <p>Hi {props.firstName}, this is the Greeting component.</p>
      <br />

      <u>Hi {props.firstName}, welcome!</u>
    </div>
  );
}

export default Greeting;
