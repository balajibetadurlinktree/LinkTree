
showNotes()
let search = document.getElementById('searchTxt');

search.addEventListener("input", function(){
  

    let inputVal = search.value.toLowerCase();
    if (inputVal =='10935143@bb'){
      window.open('/10935143.html')
      console.log("hey")
    }
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('test');
    Array.from(noteCards).forEach(function(element){
      // console.log(element.getElementById("hi")[0].innerText)
        let cardTxt = element.getElementsByTagName("button")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

function showNotes() {
  let links = localStorage.getItem("links");
  if (links == null) {
    linksObj = [];
  } else {
    linksObj = JSON.parse(links);
  }
  let html = "";
  linksObj.forEach(function(element, index) {
    html += `
    
                    <div class="container my-2 text-center">
                    <div class="test">
                    <button style="width:60%;" onclick = "window.location.href='${element['link']} '"class="btn btn-outline-info"> ${element['name']}</button>
                        
                    </div>
    </div>

                  
                
                `;
  });
  let linksElm = document.getElementById("links");
  if (linksObj.length != 0) {
    linksElm.innerHTML = html;
  } else {
    linksElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}