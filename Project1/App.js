function Main() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
       <li>was first released in 2013</li>
       <li> Was orignallt created by Jordan Walke</li>
       <li>Has well over 100K stars on GitHub</li>
       <li>Is maintained by Facebook</li>
       <li>Powers thousands of enterprise apps,including mobile apps</li>

      </ul>
    </main>
  );
}
function Nav() {
  return (
    <nav className="navv">
      <img src="logo.jpg" alt="" height="40px" />
      <h3>ReactFacts</h3>
      <h4>React Course-Project 1</h4>
    </nav>
  );
}
function App() {
  return (
    <div>
      <Nav/>
      <Main/>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
