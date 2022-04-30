 function Nav(){
     return(
         <nav>
             <img src="airmedia/logoairbnb.png" className="nav--logo"/>
         </nav>
     )
 }
 function Hero(){
     return(
     <section className="hero">
         <img src="airmedia/grid.png" className="hero--photo"/>
         <h1 className="hero--header">Online Experiences</h1>
         <p className="hero--para">Join unique interactive activities led by 
             one-of-a-kind hosts-all without leaving home.
         </p>
     </section>
     )
 }
 function Card(props){
     return(
         <div className="mainblock">
         <div className="card">
             {/* <img src="airmedia/girl.png" className="card--image"/> */}
             <div className="card-stats">
             <img src={props.img} className="card--image"/>
                 <img src={props.star} className="card--star"/>
                 <span>{props.points}</span>
                 <span className="gray">{props.number} </span>
                 <span className="gray">{props.country}</span>
                 <p>{props.line}</p>
             <p><span className="bold">{props.dollar}</span>/person</p>
             </div>
         </div>
         </div>

     )
 }
 
 function App(){
    return(
        <div className="divmain">
            <Nav/>
            <Hero/>
            <Card img="airmedia/girl.png" star="airmedia/star.png" points="5.0" number="(6)" country="USA" line="Life lessons with katie zafers" dollar="from $136"/>
            <Card img="airmedia/wedding-photography.png" star="airmedia/star.png" points="5.0" number="(6)" country="USA" line="Life lessons with katie zafers" dollar="from $136"/>
            <Card img="airmedia/mountain-bike.png" star="airmedia/star.png" points="5.0" number="(6)" country="USA" line="Life lessons with katie zafers" dollar="from $136"/>

        </div>
        
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))