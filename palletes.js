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
hextorgb = (hex) =>  {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)]
}

rgbToHsl = function([r, g, b]){
    if ((r!=255 &g!=255 &b!=255)||(r!=0 &g!=0 &b!=0)) {
        M = Math.max(r,g,b)
        m = Math.min(r, g,b)
        d = (M - m)/255
        L = (M + m)/510
        //     S = d/[1 - |2L-1|]        if L > 0
        // S = 0                         if L = 0
        switch (L) {
            case 0:
                S = 0
            default:
                S = d / (1 - Math.abs(2 * L - 1))
        }
        // H = cos-1[ (R - ½G - ½B)/√R² + G² + B² - RG - RB - GB ]            if G ≥ B, or
        // H = 360 - cos-1[ (R - ½G - ½B)/√R² + G² + B² - RG - RB - GB ]    if B > G
        if (g >= b) {
            H = (180 / Math.PI) * Math.acos((r - 0.5 * g - 0.5 * b) / ((r * r + g * g + b * b - r * g - r * b - g * b) ** 0.5))
        }
        else {
            H = 360 - (180 / Math.PI) * Math.acos((r - 0.5 * g - 0.5 * b) / ((r * r + g * g + b * b - r * g - r * b - g * b) ** 0.5))
        }
        S *= 100
        L *= 100
        return [H, S, L]
    }
    else if(r,g,b==255){
        return [0,0,100]
    }
    else{
        return [0,0,0]
    }

}

function genrateMonochromatic([h,s,l],iterations){
    let result = []
    for(let i=1;i<=iterations;i++){
        result.push([h,Math.floor(Math.random()*101),Math.floor(Math.random()*101)])
    }
    return result
}

hslToHex=function([h, s, l]){
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function modulusMax(max, a) {
    a = a % max;
    //Force a positive
    while (a < 0) {
      a += max;
    }
    value = a;
    return value;
  }
    
function analogous([h,s,l],iterations){
    let result = []
    for(let i=1;i<=iterations;i++){
        random = Math.ceil(Math.random()*179)+1
        result.push([modulusMax(360,h-random),s,l],[modulusMax(360,h+random),s,l])
    }
    return result

}
function complementary([h,s,l]){
    return [modulusMax(360,h+180),s,l]
}

function triadic([h,s,l]){
    return [[modulusMax(360,h-120),s,l],[modulusMax(360,h+120),s,l]]
}

function tetradic([h,s,l]){
    return [[modulusMax(360,h-90),s,l],[modulusMax(360,h+90),s,l],[modulusMax(360,h-180),s,l]]
}
