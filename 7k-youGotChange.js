function giveChange(amount) {
    let total = amount
    let arr = Array.of(6)
    if(total >= 100){ arr[5]= Math.floor(total / 100), total = total % 100
    }else arr[5]= 0
    if(total >= 50){ arr[4]= Math.floor(total / 50), total = total % 50
    }else arr[4]= 0
    if(total >= 20){ arr[3]= Math.floor(total / 20), total = total % 20
    }else arr[3]= 0
    if(total >= 10){ arr[2]= Math.floor(total / 10), total = total % 10
    }else arr[2]= 0
    if(total >= 5){ arr[1]= Math.floor(total / 5), total = total % 5
    }else arr[1]= 0
    if(total >= 1){ arr[0]= Math.floor(total / 1), total = total % 1
    }else arr[0]= 0

    return arr
}

console.log(giveChange())
