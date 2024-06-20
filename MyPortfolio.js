fetch('project.json').then(function (res) {
    return res.json()
}).then(function (data) {
    // In the second then block is the ONLY PLACE we are able to access the data we got back
    // Everything we need to do with the data MUST be done in here!
    const target = document.querySelector('.target')

    data.projects.forEach(function (project) {
        console.log(project)
        target.innerHTML += `
            <div class="project">
                <div class="projectTitleAndImage"> 
                    <div> 
                        <p>${project.name}</p>
                    </div>
                    <div class="imageContainer">
                        <img class="image" src="${project.img}"/>
                    </div>
                </div>

                <div> 
                    <p>${project.desc}</p>
                </div>

                <div>
                <a href='${project.ref}'>Github<i class="fa-brands fa-github"></i></a>
                </div> 
            </div>

        `
    })
})
