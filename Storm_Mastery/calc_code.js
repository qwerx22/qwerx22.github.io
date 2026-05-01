let id = x => document.getElementById(x)

var calc = window.setInterval(function() {
    current_level = id("current_lvl").value
    next_level = id("expected_lvl").value
    storm = id("storm").value
    
    cost = ((5 * (next_level ** 2)) + (95 * next_level)) - ((5 * (current_level ** 2)) + (95 * current_level))
    
    if (storm=='tire') {
        id("boost0").innerHTML = current_level - Math.floor(current_level / 100) * 100 +"%, "+ 2 ** Math.floor(1 + current_level / 100) +"x"
        id("boost1").innerHTML = next_level - Math.floor(next_level / 100) * 100 +"%, "+ 2 ** Math.floor(1 + next_level / 100) +"x"
    } else {
        id("boost0").innerHTML = current_level +"%"
        id("boost1").innerHTML = next_level +"%"
    }
    id("cost0").innerHTML = cost
    if (storm=='magnet') {
        id("cost1").innerHTML = Math.ceil(cost / 35)
        id("expectedtime").innerHTML = Math.ceil(cost / 35) * 1500
    } else if (storm=='tire') {
        id("cost1").innerHTML = Math.ceil(cost / 20)
        id("expectedtime").innerHTML = Math.ceil(cost / 20) * 1500
    } else if (storm=='GS') {
        id("cost1").innerHTML = Math.ceil(cost / 35)
        id("expectedtime").innerHTML = Math.ceil(cost / 35) * 1500
    } else if (storm=='wrench') {
        id("cost1").innerHTML = Math.ceil(cost / 100)
        id("expectedtime").innerHTML = Math.ceil(cost / 100) * 1500
    } else if (storm=='beam') {
        id("cost1").innerHTML = Math.ceil(cost / 20)
        id("expectedtime").innerHTML = Math.ceil(cost / 20) * 1500
    }
}, 50)