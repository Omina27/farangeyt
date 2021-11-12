


function natija (deg) {
    return  (deg * 9 / 5) + 32;
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
   
    
    result.textContent = natija (Number(farang.value));
    
})