function myFunction() {
    let ulElement = document.createElement("ul");
    for (let i = 1; i <= 10; i++) {
        let liElement = document.createElement('li');
        liElement.textContent =  String.fromCharCode(64 + i);
        ulElement.appendChild(liElement);

    }
    document.body.appendChild(ulElement);
}

// Ако JS кода е в html документа се изпълнява. Ако е в отделен js документ не се изпълнява.
// Трябва да е фунцкия която да извикаме иначе не реаботи. -> document.body is null


function onLoad() {

    let form = document.createElement('form');
    let textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.value = "I am a text box";
    textBox.addEventListener('focus', mOver);
    form.appendChild(textBox);
    document.body.appendChild(form);

    function mOver() {
        console.log(this.value); // this е цялото инпут поле, понеже върху него извършваме някакъв евент
        this.value = "Value is changed !";

        let span = document.createElement("span");
        span.textContent = "I am a span element !";
        span.style.border = "2px dotted red";
        span.style.background = "grey";
        document.body.appendChild(span);

        this.addEventListener('blur', function () {
                // alert("blur is here");
            console.log(this.value = "Blur is here!");
        });
    }





}
