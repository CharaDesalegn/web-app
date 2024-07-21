

const input = document.getElementById("input")
const button = document.getElementById("b")
const h3 = document.getElementById("name")
const lists = document.getElementById("search_results")
const audio = document.getElementById("audio")
const audiob = document.getElementById("audiob")



async function search(){
    clean_up()
    try{
    console.log("searching.....")
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    const data = await res.json()
    console.log(data[0].phonetics[0].audio)
    for (meaning of data[0].meanings){
        create_list(meaning.definitions,meaning.partOfSpeech)
    }

    h3.innerText = data[0].word
    audio.src = data[0].phonetics[0].audio
    }
    catch{
        h3.innerText = "Word can not be found"
    }
    
}
function p(){
    audio.play()
}
function clean_up(){
    audio.src = ""
    h3.innerText = "Searching...."
 
    //e.firstElementChild can be used. 
    let child = lists.lastElementChild;
    while (child.nodeName == "LI") {
        lists.removeChild(child)
        child = lists.lastElementChild

    }
    
}
function create_list(arr,part_of_speach){
    const list = document.createElement("li")
    list.innerText = part_of_speach + ":"
    lists.append(list)
    for (item of arr){
        const l = document.createElement("ul")
        l.innerText = item.definition
        list.append(l)
    }
}
input.addEventListener("keyup", function (event) { if (event.keyCode == 13) { button.click(); }})