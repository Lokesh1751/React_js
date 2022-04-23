function Main(){

    return(
        <h1>Main Component</h1>
    )
}
function Nav(){ 
    return(
        <h1> Nav Component</h1>
    )
}
 function App(){
    return(
        <div>
            <Nav/>
            <Main/>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))