
const file_list = ['file1','file2','file3','file4']
function show(btn) {
    
    var i;
    for (i = 0; i < file_list.length; i++) {
        if (file_list[i] === btn.id) {
            btn.style.backgroundColor = '#fff';
        } else{
            document.getElementsByClassName('file-list-item')[i].style.backgroundColor = '#ececec';
        }
        
    }
    
}

//fajna funkcja ale nie udało mi się jej wykorzystac :(
function displaytxt(){
    var file = document.getElementById("myFile").files[0];
          
    var reader = new FileReader();
    reader.onload = function (e) {
        var textArea = document.getElementById("editor-text-area");
        textArea.value = e.target.result;
    };
    reader.readAsText(file);
}

