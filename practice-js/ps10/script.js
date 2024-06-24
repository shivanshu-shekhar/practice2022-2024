async function storeNote(){
    try{
        let inputValue = document.getElementById('userInput');
        localStorage.setItem('note',inputValue.value);
        inputValue.value= '';
        console.log(localStorage.getItem('note'));
    }
    catch(errror){
        console.log(errror);
    }
}
async function joker(){
    try{
        let response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        let data = await response.json();
        document.getElementById('jokeContainer').innerHTML = `${data.joke}`;
        setTimeout(()=>{
            document.getElementById('inputter').innerHTML = `<label for="userInput">Enter a note</label>
            <input type="text" id="userInput">
            <button id="submitButton">Submit</button>`;
            let submitter = document.getElementById('submitButton');
            submitter.addEventListener('click',storeNote);
        },1000)
        // let addNote = prompt('Write a note');
        // localStorage.setItem('note',addNote);
        // console.log(localStorage.getItem('note'));
    }
    catch(errror){
        console.log(errror);
    }
}
joker();


