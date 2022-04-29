function Little(props) {
    console.log(props) // 4 objets shown
  return (
    <div className="contact-card">
      <img src="cat2.jpg" width="200px" />
      <div>
      <h3>{props.name}</h3>
      </div>
      <p>{props.phn}</p>
    </div>
  );
}
function Ans() {
  return (
    <div className="divv">
      <Little name="Sujal Angi" img="cat2.jpg" phn="8571832981" email="sujalangi@gmail.com" />
      <Little name="Mohak " img="cat3.jpg" phn="8673638282"  email="sujalangi@gmail.com" />
      <Little name="Abhishek" img="cat4.webp" phn="8974362710" email="sujalangi@gmail.com"  />
      <Little name="Mehar" img="cat5.jpg"  phn="9732671095" email="sujalangi@gmail.com" />
    </div>
  );
}
ReactDOM.render(<Ans />, document.getElementById("root"));
