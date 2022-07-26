
// search functionality
const search = () => {
    let searchBox = document.getElementById("search").value.toUpperCase();
    let storItems = document.getElementById("chat-container-parent")
    let product = document.querySelectorAll(".chat-container")
    //if someone search in search box, want to rearrange products according to the product name

    let pname = storItems.getElementsByTagName("h3")

    for (var i = 0; i < pname.length; i++) {
        let filter = product[i].getElementsByTagName("h3")[0];

        if (filter) {
            let textvalue = filter.innerHTML || filter.innerText

            if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

//chat functionality

// const recievedMessage = [];
// console.log(sendingMessage.length);

var value = document.getElementById('checkbox').value;
const check = () => {
    if (value == 'on') {
        value = 'off'
    }
    else if (value == 'off') {
        value = 'on'
    }
}
const arrayMessage = [];
let boolean=true;
function send() {
    console.log('send');
    const message = document.getElementById('inputMessage').value;
    // const my_message1 = document.getElementById('my_message1')
    // const other_message = document.getElementById('other_message')
    // console.log(sendingMessage);
    let list=""
    // let list2="<ul>"
    let content=document.getElementById('middle-content')
    // let content2=document.getElementById('div_message')
    if (value == 'on') {
        arrayMessage.push({message:message,boolean:true})
    }
    else if (value == 'off') {
        arrayMessage.push({message:message,boolean:false})
    }
    // console.log(arrayMessage);

    arrayMessage.forEach((message)=>{
        // console.log(message);
    if(message.boolean==true){
        list+="<p>"+message.message+"</p>"
        // content.classList.add('other_message')
    }
    else if(message.boolean==false){
        list+="<p class='li-receive'>"+message.message+"</p>"
        
    }
    })
    content.innerHTML=list;
    // content2.innerHTML=list2;
   
}

