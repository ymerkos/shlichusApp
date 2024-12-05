/**B"H*?

*

form actions
*/
var allRadialsboxes = document.querySelectorAll(
    ".checkbox[data-type='radial']"
)
console.log("B\"H")
function navify() {
    document.querySelectorAll(".checkbox")
        .forEach(box => {
            var w = box;
            w.addEventListener("click", e=> {
                console.log("Clicked",e.target)
                if(box.dataset.type=="radial") {

                            console.log("LOL")
                    allRadialsboxes.forEach(q=> {
                        if(q != box)
                            q.classList
                            .remove("checked")
                    })
                }
                box.classList.toggle("checked")
            })
        })
}

navify();