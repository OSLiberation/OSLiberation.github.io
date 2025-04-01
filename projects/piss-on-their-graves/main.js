window.onload = function(){
    var people = document.getElementById('people')
    var results = []

    fetch('/projects/piss-on-their-graves/data.json').then(response => response.json()).then(json=>{
        //console.log(people)
        json.forEach(person => {
            //   console.log(person)  
            var element = document.createElement('div')
            element.className = 'person'
            element.style.backgroundImage =  `url(/projects/piss-on-their-graves/portraits/${person.image})`
            element.style.filter = 'grayscale(100%)'
            element.style.borderColor = 'red'
            element.onclick = ()=>{
                console.log(person)
                var details = document.createElement('div')
                
                document.getElementById('details').innerHTML = person.name
            }
            
            results.push(element.outerHTML)
            
            people.appendChild(element)
        });
        // <div
        //     key={p.name}
        //     className="person"
        //     onClick={() => {
        //       setState({ ...state, screen: "details", selected: p.name });
        //     }}
        //     style={{
        //       backgroundImage: `url(./portraits/${p.image})`,
        //       backgroundColor: "grey",
        //       filter: "grayscale(100%)",
        //       borderColor: `${p.name === state.selected ? "red" : "blue"}`,
        //     }}
        //   ></div>
        // people.innerHTML = results
    })
}

