window.onload = function(){
    var people = document.getElementById('people')
    var results = []

    console.log(screen.width)
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
                // Header
                var header = document.createElement('h2')

                // Tags
                var tags = document.createElement('div')
                tags.id = 'tags'

                person.tags.forEach(tag => {
                    let t = document.createElement('div')
                    t.innerHTML = tag
                    t.className = 'tag'
                    tags.innerHTML += t.outerHTML
                })
                
                // Gravesite
                var gravesite = document.createElement('div')
                var image = document.createElement('img')
                var hr = document.createElement('hr')

                image.src = '/projects/piss-on-their-graves/tombstone.png'
                hr.className = 'divider'
                gravesite.id = 'gravesite'
                
                gravesite.innerHTML += image.outerHTML + ' '+ person.gravesite + hr.outerHTML

                // Crimes
                var crimes = document.createElement('div')
                crimes.id = 'crimes'
                crimes.innerHTML += "Known for..."

                person.crimes.forEach(crime => {
                    let c = document.createElement('div')
                    let title = document.createElement('p')
                    let description = document.createElement('p')

                    title.className = 'title'
                    description.className = 'description'
                    title.innerHTML = crime.title
                    description.innerHTML = crime.description

                    c.innerHTML = title.outerHTML
                    c.innerHTML += description.outerHTML

                    crimes.innerHTML += c.outerHTML
                })
                
                // 
                header.innerText = person.name
                details.innerHTML = header.outerHTML
                details.innerHTML += tags.outerHTML
                details.innerHTML += gravesite.outerHTML
                details.innerHTML += crimes.outerHTML
                
                document.getElementById('details').innerHTML = details.outerHTML
            }
            
            results.push(element.outerHTML)
            
            people.appendChild(element)
        });
    })
}

