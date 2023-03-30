let filerarray=[];

let galleryarray=[

    {
        id:1,
        name:"Formal Shoes",
        src:"./image/formal.jpg",
        desc:"FORMAL SHOES FORMAL SHOES FORMAL SHOES"
    },

    {
        id:2,
        name:"Addidas Men's Sports Shoes",
        src:"./image/grey shoes.jpg",
        desc:"FORMAL SHOES FORMAL SHOES FORMAL SHOES"
    },

    {
        id:3,
        name:"SportsMax Blue Shoes",
        src:"./image/ye.jpg",
        desc:"FORMAL SHOES FORMAL SHOES FORMAL SHOES"
    },

    {
        id:4,
        name:"Puma Red Shoes",
        src:"./image/puma red.jpg",
        desc:"FORMAL SHOES FORMAL SHOES FORMAL SHOES"
    },

    {
        id:5,
        name:"Addidas Brown shoes",
        src:"./image/boot 4.jpg",
        desc:"FORMAL SHOES FORMAL SHOES FORMAL SHOES"
    },

    {
        id:6,
        name:"Red Chiff Brown Shoes",
        src:"./image/boot 5.jpg",
        desc:"FORMAL SHOES FORMAL SHOES FORMAL SHOES"
    },
]

showgallery(galleryarray)
//create a function to show gallery

function showgallery(currarray){

    document.getElementById("card-body").innerText="";
    for(var i=0;i<currarray.length;i++){
        document.getElementById("card").innerHTML +=
        <div class="col-md-4 mb-3">
            <div class="card-body">
                <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
                <img src="${currarray[i].src}" width="100%" heigth="320px"/>
                <p class="mt-2">${currarray[i].desc}</p>
                <button class="btn btn-primary w-100 mx-auto">More</button>
            </div>
        </div>
    }
}

document.getElementById("myinput").addEventListener("keyup",function(){
    let text=document.getElementById("myinput").ariaValueMax;

    filerarray=galleryarray.filter(function(){
        if(a.name.includes(text)){
            return a.name;
        }
    });

    if(this.value==""){
        showgallery(galleryarray);
    }
    else{
        if(filerarray==""){
            document.getElementById("para").style.display='block';
            document.getElementById("card").innerHTML="";
        }
        else{
            showgallery(filerarray);
            document.getElementById("para").style.display='none';
        }
    }
})