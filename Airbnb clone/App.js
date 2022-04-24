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
 function Card(){
     return(
         <div className="card">
             <img src="airmedia/girl.png"  className="img"/> 
             <div>
             
             <img src="airmedia/Star.png"  className=""/>

             </div>
             <img src="airmedia/wedding-photography.png"  className="img"/> <br/>
             <div>
            
             <img src="airmedia/Star.png"  className=""/>

             </div>
             <img src="airmedia/mountain-bike.png"  className="img1"/> <br/>
             <div>

             <img src="airmedia/Star.png"  className=""/>

             </div>

         </div>

     )
 }
 
 function App(){
    return(
        <div className="divmain">
            <Nav/>
            <Hero/>
            <Card/>
        </div>
        
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))