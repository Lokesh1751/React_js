function App(){
    const color=[
        <h3>Violet</h3>,
        <h3>Indigo</h3>,
        <h3>Blue</h3>,
        <h3>Green</h3>,
        <h3>Yellow</h3>,
        <h3>Orange</h3>,
        <h3>Red</h3>

]
    return(
        <div>
            {color}
            </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))