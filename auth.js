const form = document.getElementById("signupForm");
const error = document.getElementById("error");
const strengthText = document.getElementById("passwordStrength");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;

    if (!email.includes("@") || !email.includes(".") || email.split(".")[1].length < 2) {
        error.textContent = "ელ. ფოსტა არასწორია";
        return;
    }

    if (password !== confirmPassword) {
        error.textContent = "პაროლები არ ემთხვევა";
        return;
    }

    if (phone.length < 9) {
        error.textContent = "მობილურის ნომერი არასწორია";
        return;
    }

    error.textContent = "";
    alert("რეგისტრაცია წარმატებულია");
});

document.getElementById("password").addEventListener("input", function () {
    const value = this.value;

    if (/^[a-zA-Z]+$/.test(value)) {
        strengthText.textContent = "სუსტი პაროლი";
        strengthText.style.color = "red";
    } 
    else if (/^[a-zA-Z0-9]+$/.test(value)) {
        strengthText.textContent = "საშუალო პაროლი";
        strengthText.style.color = "orange";
    } 
    else if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)) {
        strengthText.textContent = "ძლიერი პაროლი";
        strengthText.style.color = "green";
    } 
    else {
        strengthText.textContent = "";
    }
});
