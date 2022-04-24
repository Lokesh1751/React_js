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
 
 function App(){
    return(
        <div className="divmain">
            <Nav/>
            <Hero/>
        </div>
        
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))