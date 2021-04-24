// plant("@", 3, 3, 25) => "---@@@---@@@---@@@"
// # Water gives the length of the stem portions between flowers
// # Water also gives the total number of segments(number of times flowers + stems should be repeated)
// # Fertilizer gives the length of the flower clusters.
// # Temperature is in the range of 20°C and 30°C

// plant("$", 4, 2, 30) => "----$$----$$----$$----$$"

// plant("&", 1, 5, 20) => "-&&&&&"

// plant("^", 3, 3, 35) => "---------^"

function plant(seed, water, fert, temp){
    let look = '';
    temp < 20 || temp > 30 ? look = '-'.repeat(water * water) + seed : look = ('-'.repeat(water) + seed.repeat(fert)).repeat(water);
    return look
   }

plant('$', 3, 2, 20)