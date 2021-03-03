let arrString = []
document.getElementById('addString').onclick = ()=>{
    arrString.push(document.getElementById('inputArrString').value)

    document.getElementById('inputArrString').value = ''
}
document.getElementById('returnString').onclick = ()=>{
    let bigString = ''
    arrString.forEach(element => {
        if(element.length > bigString.length){
            bigString = element
        }
    })
    document.getElementById('biggestString').innerHTML = "Самой большой строкой является: " + bigString

}
var firstS,returnedSymbol;

document.getElementById('btnReturnSymbol').onclick = ()=>{
    firstS = document.getElementById('inputReturnSymbol').value.toLowerCase()
    let counter = {}
    for(let el of firstS){
        if(counter.hasOwnProperty(el)){
            counter[el]++
        }else counter[el] = 1
    }
    let values = Object.values(counter), keys = Object.keys(counter), index = 0;
    for(let i=0; i<values.length;i++){
        if(values[i]>index){
            index = values[i]
            
        }
       
    }
    returnedSymbol = keys[values.indexOf(index)];
    document.getElementById('returnSymbol').innerHTML = "Чаще всего встречается символ: " + returnedSymbol;
}

document.getElementById('btnChangeSymbol').onclick = ()=>{
    let symbol = document.getElementById('inputChangeSymbol').value
    if(symbol === '') symbol = ' '
    
    document.getElementById('changeSymbol').innerHTML = "Новая строка: " + firstS.replaceAll(returnedSymbol,symbol);

}

document.getElementById('btnAnagram').onclick = ()=>{
    let firstString = document.getElementById('anagramString1').value
    let secondString = document.getElementById('anagramString2').value
    firstString = firstString.trim().toLowerCase()
    secondString = secondString.trim().toLowerCase()
    let counter = 0
    if(firstString.length === secondString.length){
        firstString = firstString.split('').sort()
        secondString = secondString.split('').sort()
        for(let i=0; i < firstString.length; i++){
            if(firstString[i]===secondString[i]){
                counter++
            }
            else break;   
        }
    }
    if(counter===firstString.length){
        document.getElementById('anagram').innerHTML = "true"
    } else document.getElementById('anagram').innerHTML = "false"
}

