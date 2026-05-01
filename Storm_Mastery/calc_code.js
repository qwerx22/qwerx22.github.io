let id = x => document.getElementById(x)

var calc = window.setInterval(function() {
    current_level = id("current_lvl").value
    next_level = id("expected_lvl").value
    storm = id("storm").value
    
    cost = ((5 * (next_level ** 2)) + (95 * next_level)) - ((5 * (current_level ** 2)) + (95 * current_level))
    current_progress = id("progress").value
    maximum_progress = 100 + 10 * current_level
    id("max_progress").innerHTML = maximum_progress
    
    if (current_progress >= maximum_progress) {
        current_progress = (maximum_progress - 1)
        id("progress").value = (maximum_progress - 1)
    }
    
    if (storm=='tire') {
        id("boost0").innerHTML = current_level - Math.floor(current_level / 100) * 100 +"%, "+ 2 ** Math.floor(1 + current_level / 100) +"x"
        id("boost1").innerHTML = next_level - Math.floor(next_level / 100) * 100 +"%, "+ 2 ** Math.floor(1 + next_level / 100) +"x"
    } else {
        id("boost0").innerHTML = current_level +"%"
        id("boost1").innerHTML = next_level +"%"
    }
    id("cost0").innerHTML = cost - current_progress
    if (storm=='magnet') {
        id("cost1").innerHTML = Math.ceil((cost - current_progress) / 35)
        id("expectedtime").innerHTML = Math.ceil((cost - current_progress) / 35) * (5/12)
    } else if (storm=='tire') {
        id("cost1").innerHTML = Math.ceil((cost - current_progress) / 20)
        id("expectedtime").innerHTML = Math.ceil((cost - current_progress) / 20) * (5/12)
    } else if (storm=='GS') {
        id("cost1").innerHTML = Math.ceil((cost - current_progress) / 35)
        id("expectedtime").innerHTML = Math.ceil((cost - current_progress) / 35) * (5/12)
    } else if (storm=='wrench') {
        id("cost1").innerHTML = Math.ceil((cost - current_progress) / 100)
        id("expectedtime").innerHTML = Math.ceil((cost - current_progress) / 100) * (5/12)
    } else if (storm=='beam') {
        id("cost1").innerHTML = Math.ceil((cost - current_progress) / 20)
        id("expectedtime").innerHTML = Math.ceil((cost - current_progress) / 20) * (5/12)
    }
}, 50)