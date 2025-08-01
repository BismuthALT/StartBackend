function Test(){
    console.log('Penis')
}
Test()

function Hello(Name, text){
    console.log(Name + ' ' + text)
}
Hello('Русля', ',передает привет кто читает текст')
Hello('Даня', ',тест')

function calculatorNumber(initValue){
    x = initValue
    x = x/25
    return x;
}
const result = calculatorNumber(250);
const result1 = calculatorNumber(2502);
console.log(result);
console.log(result1);


function squareCirce(r){
    return 3.14 * r ** 2 
}
const firstCirce = squareCirce(3)
console.log(firstCirce)
const TwoCirce = squareCirce(31)
console.log(TwoCirce)


function createHTMLElement(tag, id, text) {
    const element = document.createElement(tag);
    element.id = id;
    element.innerText = text;
    return element; 
}
const h1Element = createHTMLElement('h1','header1','prostotext');
console.log(h1Element)
document.body.append(h1Element)
