const apiKey = '9f867d0ae4ac404dbb60e0aa6238ddd1'




const lista = document.getElementById('infos')
async function perdirPost () {
    const response = await fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
    const data = await response.json()
    console.log(data.results)
    const data1 = data.results

    console.log(data1)
    data1.forEach(post => {
                    const li = document.createElement('li')
                    li.innerHTML = `
                    <h4>${post.name}</h4>
                    <p>Fecha de salida: ${post.released}</p>
                    <img src="${post.short_screenshots[0].image}" alt="">
                    
                    `

                    lista.appendChild(li)
                });
            }
            perdirPost()