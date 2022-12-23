colorname = []
function getdata() {
    fetch('colors-name.json')
        .then((http) => http.json())
        .then((data) => window.colorname = data)
}
getdata()
function typehover() {
    document.getElementsByClassName('drop-down')[0].style.visibility = 'visible'
}
function typehover2() {
    document.getElementsByClassName('drop-down')[0].style.visibility = 'hidden'
}
document.body.addEventListener('keypress', (e) => {
    if (e.keyCode === 32) {
        document.getElementById('clr1').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length)[0]]['hex-code']
        document.getElementById('clr2').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length)[1]]['hex-code']
        document.getElementById('clr3').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length)[2]]['hex-code']
        document.getElementById('clr4').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length)[3]]['hex-code']
        document.getElementById('clr5').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length)[4]]['hex-code']

    }
})
function randomnumber(start, end) {
    len = end - start + 1
    number = Math.floor(Math.random() * (len + 1))
    return number
}
function uniquearray(len, start, end) {
    num = randomnumber(start, end)
    a = []
    while (a.length != len) {
        if (a.filter(() => {
            if (a.indexOf(num) == -1)
                return true
        })) {
            a.push(num)
        }
    }
    return a
}
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}
