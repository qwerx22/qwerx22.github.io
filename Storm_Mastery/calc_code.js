let id = x => document.getElementById(x)

function cleanNumber(value) {
    if (value != Infinity) {
        if (value < 1e6) {
            if (value >= 1e3) {
                var overk = Math.round(Math.floor(value / 1000))
                var underk = Math.round(value - (Math.floor(value / 1000) * 1000))
                if (underk < 10) {
                    return ""+overk+",00"+underk+""
                } else if (underk < 100) { 
                    return ""+overk+",0"+underk+""
                } else {
                    return ""+overk+","+underk+""
                }
            } else if (value < 0) {
                return "<0"
            } else {
                return Math.round(value * 100) / 100
            }
        } else {
            var exp = Math.floor(Math.log10(value))
            var front = Math.round(value / 10 ** Math.floor(Math.log10(value)) * 1000) / 1000
            return ""+front+"e"+exp+""
        }
    } else {
        return ">1.8e308"
    }
}

var calc = window.setInterval(function() {
    //level
    current_level = Math.round(id("current_lvl").value)
    next_level = Math.round(id("expected_lvl").value)
    storm = id("storm").value
    if (next_level >= current_level) {
        cost = ((5 * (next_level ** 2)) + (95 * next_level)) - ((5 * (current_level ** 2)) + (95 * current_level))
    } else {
        cost = 0
    }
    current_progress = Math.round(id("progress").value)
    maximum_progress = 100 + 10 * current_level
    tire_boosted = Math.round(id("tireStormValue").value)
    id("max_progress").innerHTML = maximum_progress
    
    if (current_progress >= maximum_progress) {
        current_progress = (maximum_progress - 1)
        id("progress").value = (maximum_progress - 1)
    }
    
    if (storm=='tire') {
        id("boost0").innerHTML = current_level - Math.floor(current_level / 100) * 100 +"%, "+ cleanNumber(2 ** Math.floor(1 + current_level / 100)) +"x"
        id("boost1").innerHTML = next_level - Math.floor(next_level / 100) * 100 +"%, "+ cleanNumber(2 ** Math.floor(1 + next_level / 100)) +"x"
        id("tireStormBoost").style.display = "inline-block"
    } else {
        id("boost0").innerHTML = cleanNumber(current_level) +"%"
        id("boost1").innerHTML = cleanNumber(next_level) +"%"
        id("tireStormBoost").style.display = "none"
    }
    id("cost0").innerHTML = cleanNumber(cost - current_progress)
    if (storm=='magnet') {
        id("cost1").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 35))
        id("expectedtime").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 35) * (5/12))
    } else if (storm=='tire') {
        id("cost1").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / (20 + tire_boosted)))
        id("expectedtime").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / (20 + tire_boosted)) * (5/12))
    } else if (storm=='GS') {
        id("cost1").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 35))
        id("expectedtime").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 35) * (5/12))
    } else if (storm=='wrench') {
        id("cost1").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 100))
        id("expectedtime").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 100) * (5/12))
    } else if (storm=='beam') {
        id("cost1").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 20))
        id("expectedtime").innerHTML = cleanNumber(Math.ceil((cost - current_progress) / 20) * (5/12))
    }
    //token
}, 50)

function tabs(tabs) {
    id("tab1").style.display = "none"
    id("tab2").style.display = "none"
    id(tabs).style.display = "inline-block"
}
tabs("tab1")