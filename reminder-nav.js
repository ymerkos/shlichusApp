/*B"H*/
console.log(
`B"H
Made by Awtsmoos`
)

populateValues()
function populateValues() {
    var holder = document.querySelector(
        ".reminder-time-select"
    )
    if(!holder) return console.log("NO");

    var timeArea = document.createElement
        ("div")
    timeArea.classList.add("time-holder")
    holder.appendChild(timeArea);

    var h = document.createElement("div")
    h.classList.add("hour", "sel")
    timeArea.appendChild(h);

    var colin = document.createElement("div")
    timeArea.appendChild(colin);
    colin.textContent = ":";
    colin.classList.add("colin")
    var m = document.createElement("div")
    m.classList.add("minute", "sel")
    timeArea.appendChild(m);

    var a = document.createElement("div")
    a.classList.add("am-pm", "sel")
    holder.appendChild(a);
    
    var v = document.createElement("div")
        v.classList.add("hour-val", "col","null")
        h.appendChild(v);
     v.textContent = " a"
    for(var i = 1; i <= 12; i++) {
        var v = document.createElement("div")
        v.classList.add("hour-val", "col")
        h.appendChild(v);
        v.textContent = (i+"");
        v.onclick = () => {
            scrollToCenter(v)
        }
          //  .padStart(2, "0")
    }
    var v = document.createElement("div")
        v.classList.add("hour-val", "col","null")
        h.appendChild(v);
     v.textContent = " a"


     var v = document.createElement("div")
        v.classList.add("minute-val", "col","null")
        m.appendChild(v);
     v.textContent = " a"
    for(var i = 0; i < 60; i++) {
        var v = document.createElement("div")
        v.classList.add("minute-val", "col")
        m.appendChild(v);
        v.textContent = (i+"")
            .padStart(2, "0");

        v.onclick = () => {
            scrollToCenter(v)
        }
    }
    var v = document.createElement("div")
        v.classList.add("minute-val", "col","null")
        m.appendChild(v);
     v.textContent = " a"


    var v = document.createElement("div")
        v.classList.add("minute-val", "col","null")
        a.appendChild(v);
     v.textContent = " a"
    for(var i = 1; i <= 2; i++) {
        var t = document.createElement("div")
        t.classList.add("ap-val", "col")
        a.appendChild(t);
        t.textContent = i == 1 ?
            "am" : "pm";

        t.onclick = () => {
            scrollToCenter(t)
        }
    }
    var v = document.createElement("div")
        v.classList.add("minute-val", "col","null")
        a.appendChild(v);
     v.textContent = " a"
    enableSmoothScrollSnap(h);
    enableSmoothScrollSnap(m)
    enableSmoothScrollSnap(a);
}

function scrollToCenter(el) {
  if (!el) return;
return;
  // Find the closest scrollable container
  const container = el.parentNode;
  if (!container) return;

  // Calculate dimensions
  const containerHeight = container.clientHeight;
  const containerScrollTop = container.scrollTop;
  const elementOffsetTop = el.offsetTop;
  const elementHeight = el.offsetHeight;

  // Calculate the target scroll position to center the element
  const targetScrollTop = elementOffsetTop - (containerHeight / 2) + (elementHeight / 2);

  // Smoothly scroll to the calculated position
  container.scrollTo({
    top: targetScrollTop,
    behavior: 'smooth'
  });
}


 function enableSmoothScrollSnap(container) {
      var children = Array.from(container.children)
      // Helper function to find the child closest to the center
    

    // Add scroll event listener
    var doIt = () => {
      const middleChild = getMiddleChild(container);

      // Remove highlight from all children
      children.forEach((child) => child.classList.remove('highlighted'));

      // Highlight the middle child
      if (middleChild) {
        middleChild.classList.add('highlighted');
     //   console.log('Middle child value:', middleChild.textContent);
      }
    };
    doIt();
    container.addEventListener('scroll', doIt);
}

function getTime() {
    var g = document.querySelector(".minute.sel")
    var h = document.querySelector(".hour.sel")
    var a = document.querySelector(".am-pm.sel")

    var hr = getMiddleChild(h)
    var min = getMiddleChild(g);
    var am = getMiddleChild(a)
  // console.log(g,h,a)
    return hr.textContent + ":" +min.textContent
        + am.textContent;
}

function getMiddleChild(container) {
  var children = Array.from(container.children)
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.top + containerRect.height / 2;

  let closestChild = null;
  let closestDistance = Infinity;

  children.forEach((child) => {
    const rect = child.getBoundingClientRect();
    const childCenter = rect.top + rect.height / 2;
    const distance = Math.abs(containerCenter - childCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestChild = child;
    }
  });

  return closestChild;
}
