rowOffset = [
    3,
    2,
    0,
]

colOffset = [
    // 0,
    // 2,
    // 2.5,
    // 2,
    // 1,
    // 1,
    // 2,
    // 2.5,
    // 2,
    // 0,
]

window.onload = function() {
    for (let i = 0; i < rowOffset.length; i++) {
        for (const key of document.getElementsByClassName(`r-${i}`)) {
            key.style.marginLeft = `-${rowOffset[i]}rem`
        }
    }

    for (let i = 0; i < colOffset.length; i++) {
        for (const key of document.getElementsByClassName(`c-${i}`)) {
            key.style.marginTop = `-${colOffset[i]}rem`
        }
    }

    document.getElementById("grid").style.marginLeft = `${Math.max(...rowOffset)}rem`
    document.getElementById("grid").style.marginTop = `${Math.max(...colOffset)}rem`
}