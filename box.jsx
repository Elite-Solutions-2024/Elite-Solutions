import React, { useEffect } from 'react';

export default function Box() {
//box1

setInterval(()=>{
    let sub=document.getElementById("sub-box1");
    sub.style.backgroundImage=``
})
    useEffect(() => {
        const box1 = document.getElementById("box1");
        if (box1) {
            box1.addEventListener("mouseover", () => {
                // box1.style.backgroundColor = "yellow";
                box1.style.height="480px";
                box1.style.width="250px"
                box1.style.borderRadius="140px 140px 140px 140px";
                box1.style.transform="rotate(20deg)";
                box1.style.backgroundImage="url('https://expertphotography.b-cdn.net/wp-content/uploads/2021/08/Become-Professional-Photographer-Tom-Pumford.jpg')"
                box1.style.color="white";
                // box1.style.backgroundSize="cover"
            });
        }
    }); 

    useEffect(() => {
        const box1 = document.getElementById("box1");
        if (box1) {
            box1.addEventListener("mouseout", () => {
                box1.style.backgroundColor = "white";
                box1.style.width = "280px";
                box1.style.height = "280px";
                box1.style.borderRadius = "50%";
                box1.style.transform="rotate(0deg)";
                box1.style.backgroundImage="linear-gradient(white,white)";
                box1.style.color="black";

            });
        }
    }); 
    //box2
    useEffect(() => {
        const box1 = document.getElementById("box2");
        if (box1) {
            box1.addEventListener("mouseover", () => {
                // box1.style.backgroundColor = "yellow";
                box1.style.height="480px";
                box1.style.width="250px"
                box1.style.borderRadius="140px 140px 140px 140px";
                box1.style.transform="rotate(20deg)";
                box1.style.backgroundImage="url('https://expertphotography.b-cdn.net/wp-content/uploads/2021/08/Become-Professional-Photographer-Tom-Pumford.jpg')"
                box1.style.color="white";
                // box1.style.backgroundSize="cover"
            });
        }
    }); 

    useEffect(() => {
        const box1 = document.getElementById("box2");
        if (box1) {
            box1.addEventListener("mouseout", () => {
                box1.style.backgroundColor = "white";
                box1.style.width = "280px";
                box1.style.height = "280px";
                box1.style.borderRadius = "50%";
                box1.style.transform="rotate(0deg)";
                box1.style.backgroundImage="linear-gradient(white,white)";
                box1.style.color="black";

            });
        }
    }); 
    //box3
    useEffect(() => {
        const box1 = document.getElementById("box3");
        if (box1) {
            box1.addEventListener("mouseover", () => {
                // box1.style.backgroundColor = "ye";

                box1.style.height="480px";
                box1.style.width="250px"
                box1.style.borderRadius="140px 140px 140px 140px";
                box1.style.transform="rotate(20deg)";
                box1.style.backgroundImage="url('https://expertphotography.b-cdn.net/wp-content/uploads/2021/08/Become-Professional-Photographer-Tom-Pumford.jpg')"
                box1.style.color="white";
                // box1.style.backgroundSize="cover"
                
            });
        }
    }); 

    useEffect(() => {
        const box1 = document.getElementById("box3");
        if (box1) {
            box1.addEventListener("mouseout", () => {
                box1.style.backgroundColor = "white";
                box1.style.width = "280px";
                box1.style.height = "280px";
                box1.style.borderRadius = "50%";
                 box1.style.backgroundImage="linear-gradient(white,white)";
                // box1.style.opacity="0.1"
                box1.style.transition="1s";
                box1.style.transform="rotate(0deg)";
                box1.style.color="black";
               

            });
        }
    }); 
     //box4
    useEffect(() => {
        const box1 = document.getElementById("box4");
        if (box1) {
            box1.addEventListener("mouseover", () => {
                // box1.style.backgroundColor = "yellow";
                box1.style.height="480px";
                box1.style.width="250px"
                box1.style.borderRadius="140px 140px 140px 140px";
                box1.style.transform="rotate(20deg)";
                box1.style.backgroundImage="url('https://th.bing.com/th/id/R.1f45fbbef74b9409ff59f8b6a973b490?rik=VfKNIadGTVVoDg&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f08-2018%2f1-nature-photography-spring-season-mumtazshamsee.jpg&ehk=eaQqTLzHEgowByII8QCshI936kFY98rqanl52MLHkEU%3d&risl=&pid=ImgRaw&r=0')"
                box1.style.color="white";
                // box1.style.backgroundSize="cover"
            });
        }
    }); 

    useEffect(() => {
        const box1 = document.getElementById("box4");
        if (box1) {
            box1.addEventListener("mouseout", () => {
                box1.style.backgroundColor = "white";
                box1.style.width = "280px";
                box1.style.height = "280px";
                box1.style.borderRadius = "50%";
                box1.style.transform="rotate(0deg)";
                box1.style.backgroundImage="linear-gradient(white,white)";
                box1.style.color="black";

            });
        }
    }); 

    return (
        <div className="sub-box" id="gradient-container" >
            <div className="box" id="box1">About Us</div>
            <div className="box" id="box2">Serivces</div>
            <div className="box" id="box3">Careers</div>
            <div className="box" id="box4">Courses</div>
        </div>
    );
}
