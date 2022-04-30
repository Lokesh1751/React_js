function Little(props) {
    console.log(props.isGood) // 4 objets shown
  return (
    <div className="contact-card">
      <img src={props.img} width="200px" />
      <div>
         <h3 className="namee" style={{display:props.name ? "block" : "none"}}>Name:{props.name}</h3>
      </div>
      <p>{props.phn}</p>
      <p>{props.email}</p>
      <p>{props.upvotes}</p>
    </div>
  );
}
function Ans() {
  return (
    <div className="divv">
      <Little name="Sujal Angi" img="cat2.jpg" phn="8571832981" email="sujalangi@gmail.com"
      isGood={true}
      upvotes={10}
      downvotes={9}
      comments={[{author:"sujal",body:" ",title:"info"}]}

      
      />
      <Little name="Mohak " img="cat3.jpg" phn="8673638282"  email="mohak@gmail.com"
       isGood={true}
       upvotes={10}
       downvotes={9}
       comments={[{author:"mohak",body:" ",title:"info"}]}
      
      />
      <Little name="Abhishek" img="cat4.webp" phn="8974362710" email="abhishek@gmail.com" 
       isGood={false}
       upvotes={10}
       downvotes={9}
       comments={[{author:"abhishek",body:" ",title:"info"}]}

      
      />
      <Little name="Mehar" img="cat5.jpg"  phn="9732671095" email="mehar@gmail.com"
       isGood={true}
       upvotes={10}
       downvotes={9}
       comments={[{author:"mehar",body:" ",title:"info"}]}

      
      />
    </div>
  );
}
ReactDOM.render(<Ans />, document.getElementById("root"));
