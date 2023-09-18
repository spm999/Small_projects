const cent = document.getElementById("center")

cent.addEventListener("mousemove", (details) => {
    //  console.log("HHHHHHHH")
    var a = cent.getBoundingClientRect()
    // console.log(a)
    // console.log(details)
    var leftOrRight = details.clientX - a.left
    console.log(leftOrRight)
    if (leftOrRight < a.width / 2) {
        console.log("Left")
        var redcolor = gsap.utils.mapRange(0, a.width / 2, 255, 0, leftOrRight);
        gsap.to(cent, {
            backgroundColor: `rgb(${redcolor}, 0, 0, 1)`,
            ease: Power4,
        });
    }

    // else if (leftOrRight === a.width / 2){

    //     var whitecolor = gsap.utils.mapRange(0, a.width/2 , 0, 255, leftOrRight);
    //     console.log(`whitecolor: ${whitecolor}`);
    //     gsap.to(cent, {
    //         backgroundColor: `rgb(${whitecolor}, ${whitecolor}, ${whitecolor})`,
    //         ease: Power4,
    //     });
    //     console.log("Mid")
    // }
    // else if (leftOrRight >= a.width / 2 && leftOrRight < a.width / 2 + 1) {
    //     // Add a small margin of 1 to account for potential precision issues
    //     var whitecolor = gsap.utils.mapRange(0, a.width , 255, 255, leftOrRight);
    //     console.log(`whitecolor: ${whitecolor}`);
    //     gsap.to(cent, {
    //         backgroundColor: `rgb(${whitecolor}, ${whitecolor}, ${whitecolor})`,
    //         ease: Power4,
    //     });
    //     console.log("Mid");
    // }
    


    else {
        // console.log("Left")
        var bluecolor = gsap.utils.mapRange(a.width / 2, a.width, 0, 255, leftOrRight);
        gsap.to(cent, {
            backgroundColor: `rgb(0, 0, ${bluecolor}, 1)`,
            ease: Power4,
        });
        // console.log("Right")
    }
})
cent.addEventListener("mouseleave", () =>{
    // cent.style.backgroundColor="white";
    gsap.to(cent, {
        backgroundColor: "white",
    })
    console.log("Left the box")
}) 