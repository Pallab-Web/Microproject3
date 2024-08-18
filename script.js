const input = document.querySelector('.text');
const btn = document.querySelectorAll('.button');
const deleteBtn = document.querySelector('#delete');
const resetBtn = document.querySelector('#Reset');
const equalBtn = document.querySelector('.equal');

let recentExp = "";

function updatedExp(){
    input.value = recentExp;
}


btn.forEach((button) => {
    button.addEventListener("click", () => {

        recentExp += button.textContent
        updatedExp()
    });
})

deleteBtn.addEventListener("click", () => {
    recentExp = recentExp.slice(0, -1)
    updatedExp()
})

resetBtn.addEventListener("click", () => {
    recentExp = ""
    updatedExp()
})
function preExpression(exp){
    return exp.replace(/\b0+(\d)/g, '$1');
}
equalBtn.addEventListener("click", () => {
    try {
        const expression = preExpression(recentExp)
        const result = eval(expression)
        recentExp = result.toString()
        updatedExp()
    } catch (error) {
        alert("invalid expression")
    }
})
