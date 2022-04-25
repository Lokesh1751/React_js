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
             {/* <img src="airmedia/girl.png" className="card--image"/> */}
             <div className="card-stats">
             <img src="airmedia/girl.png" className="card--image"/>
                 <img src="airmedia/star.png" className="card--star"/>
                 <span>5.0</span>
                 <span className="gray">(6)  . </span>
                 <span className="gray">USA</span>
                 <p>Life lessons with katie zafers</p>
             <p><span className="bold">from $136</span>/person</p>
             </div>
             <div className="card-stats">
             <img src="airmedia/wedding-photography.png" className="card--image"/>
                 <img src="airmedia/star.png" className="card--star"/>
                 <span>5.0</span>
                 <span className="gray">(6)  . </span>
                 <span className="gray">USA</span>
                 <p>Life lessons with katie zafers</p>
             <p><span className="bold">from $136</span>/person</p>
             </div>
             <div className="card-stats">
             <img src="airmedia/mountain-bike.png" className="card--image1"/>
                 <img src="airmedia/star.png" className="card--star"/>
                 <span>5.0</span>
                 <span className="gray">(6)  . </span>
                 <span className="gray">USA</span>
                 <p>Life lessons with katie zafers</p>
             <p><span className="bold">from $136</span>/person</p>
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