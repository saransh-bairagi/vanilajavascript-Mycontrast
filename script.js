colorname = []
function getdata() {
    fetch('colors-name.json')
        .then((http) => http.json())
        .then((data) => window.colorname = data)
}
getdata()
typehover = function () {
    document.getElementsByClassName('drop-down')[0].style.visibility = 'visible'
}
typehover2 = function () {
    document.getElementsByClassName('drop-down')[0].style.visibility = 'hidden'
}
checkkeycode = (e)=>{
    if (e.keyCode ===32){
        return true
    }
    else {
        return false
    }
    }


document.body.addEventListener('keypress', (e) => {
    if (checkkeycode(e)) {
        document.getElementById('clr1').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length-1)[0]]['hex-code']
        document.getElementById('clr2').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length-1)[1]]['hex-code']
        document.getElementById('clr3').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length-1)[2]]['hex-code']
        document.getElementById('clr4').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length-1)[3]]['hex-code']
        document.getElementById('clr5').style.backgroundColor = colorname[uniquearray(5, 0, colorname.length-1)[4]]['hex-code']

    }
})
document.getElementById('color-1').addEventListener('click', () => {
    // document.body.removeEventListener('keypress', initialwindowiterate)
    document.getElementsByClassName('drop-down')[0].style.visibility = 'hidden'
    randomhex = colorname[randomnumber(0, colorname.length - 1)]['hex-code']
    randomrgb = hextorgb(randomhex)
    randomhsl = rgbToHsl(randomrgb)
    Monoarray = genrateMonochromatic(rgbToHsl(hextorgb(colorname[randomnumber(0, colorname.length - 1)]['hex-code'])), 4)

    document.getElementById('clr1').style.backgroundColor = `rgb(${Monoarray[0][0]}%,${Monoarray[0][1]}%,${Monoarray[0][2]}%)`
    document.getElementById('clr2').style.backgroundColor = `rgb(${Monoarray[1][0]}%,${Monoarray[1][1]}%,${Monoarray[1][2]}%)`
    document.getElementById('clr4').style.backgroundColor = `rgb(${Monoarray[2][0]}%,${Monoarray[2][1]}%,${Monoarray[2][2]}%)`
    document.getElementById('clr5').style.backgroundColor = `rgb(${Monoarray[3][0]}%,${Monoarray[3][1]}%,${Monoarray[3][2]}%)`
    document.getElementById('clr3').style.backgroundColor = randomhex
    document.body.addEventListener('keypress', (e1) => {
        if (checkkeycode(e1)) {
            Monoarray = genrateMonochromatic(rgbToHsl(hextorgb(colorname[randomnumber(0, colorname.length - 1)]['hex-code'])), 4)
            document.getElementById('clr1').style.backgroundColor = `rgb(${Monoarray[0][0]}%,${Monoarray[0][1]}%,${Monoarray[0][2]}%)`
            document.getElementById('clr2').style.backgroundColor = `rgb(${Monoarray[1][0]}%,${Monoarray[1][1]}%,${Monoarray[1][2]}%)`
            document.getElementById('clr4').style.backgroundColor = `rgb(${Monoarray[2][0]}%,${Monoarray[2][1]}%,${Monoarray[2][2]}%)`
            document.getElementById('clr5').style.backgroundColor = `rgb(${Monoarray[3][0]}%,${Monoarray[3][1]}%,${Monoarray[3][2]}%)`
            document.getElementById('clr3').style.backgroundColor = randomhex
        }

    })
})
document.getElementById('color-2').addEventListener('click', () => {

    // document.body.removeEventListener('keypress', initialwindowiterate)
    document.getElementsByClassName('drop-down')[0].style.visibility = 'hidden'
    randomhex = colorname[randomnumber(0, colorname.length - 1)]['hex-code']
    randomrgb = hextorgb(randomhex)
    randomhsl = rgbToHsl(randomrgb)
    analogous_scheme = analogous(rgbToHsl(hextorgb(colorname[randomnumber(0, colorname.length - 1)]['hex-code'])), 4)
    document.getElementById('clr1').style.backgroundColor = `rgb(${analogous_scheme[0][0]}%,${analogous_scheme[0][1]}%,${analogous_scheme[0][2]}%)`
    document.getElementById('clr2').style.backgroundColor = `rgb(${analogous_scheme[2][0]}%,${analogous_scheme[2][1]}%,${analogous_scheme[2][2]}%)`
    document.getElementById('clr4').style.backgroundColor = `rgb(${analogous_scheme[1][0]}%,${analogous_scheme[1][1]}%,${analogous_scheme[1][2]}%)`
    document.getElementById('clr5').style.backgroundColor = `rgb(${analogous_scheme[3][0]}%,${analogous_scheme[3][1]}%,${analogous_scheme[3][2]}%)`
    document.getElementById('clr3').style.backgroundColor = randomhex
    document.body.addEventListener('keypress', (e) => {
        if (checkkeycode(e)) {
            randomhex = colorname[randomnumber(0, colorname.length - 1)]['hex-code']
            randomrgb = hextorgb(randomhex)
            randomhsl = rgbToHsl(randomrgb)
            analogous_scheme = analogous(rgbToHsl(hextorgb(colorname[randomnumber(0, colorname.length - 1)]['hex-code'])), 4)
            document.getElementById('clr1').style.backgroundColor = `rgb(${analogous_scheme[0][0]}%,${analogous_scheme[0][1]}%,${analogous_scheme[0][2]}%)`
            document.getElementById('clr2').style.backgroundColor = `rgb(${analogous_scheme[2][0]}%,${analogous_scheme[2][1]}%,${analogous_scheme[2][2]}%)`
            document.getElementById('clr4').style.backgroundColor = `rgb(${analogous_scheme[1][0]}%,${analogous_scheme[1][1]}%,${analogous_scheme[1][2]}%)`
            document.getElementById('clr5').style.backgroundColor = `rgb(${analogous_scheme[3][0]}%,${analogous_scheme[3][1]}%,${analogous_scheme[3][2]}%)`
            document.getElementById('clr3').style.backgroundColor = randomhex
        }
    })
})
document.getElementById('color-3').addEventListener('click',()=>{
    document.getElementsByClassName('color-box')[0].style['grid-template-rows']='5fr 4fr'
    document.getElementsByClassName('drop-down')[0].style.visibility = 'hidden'
    randomhex = colorname[randomnumber(0, colorname.length - 1)]['hex-code']
    randomrgb = hextorgb(randomhex)
    randomhsl = rgbToHsl(randomrgb)
    document.getElementById('clr1').style.backgroundColor = randomhex
    document.getElementById('clr2').style.backgroundColor = `rgb(${complementary(randomhsl)[0]}%,${complementary(randomhsl)[1]}%,${complementary(randomhsl)[2]}%)`
    document.body.addEventListener('keypress',(e)=>{
        if(checkkeycode){
            randomhex = colorname[randomnumber(0, colorname.length - 1)]['hex-code']
            randomrgb = hextorgb(randomhex)
            randomhsl = rgbToHsl(randomrgb)
            document.getElementById('clr1').style.backgroundColor = randomhex
            document.getElementById('clr2').style.backgroundColor = `rgb(${complementary(randomhsl)[0]}%,${complementary(randomhsl)[1]}%,${complementary(randomhsl)[2]}%)`

        }
    })

})