

var loginHtml = `

<div id="login" class="p-2 w-50 d-flex justify-content-center align-item-center">

        <div class="w-100">
        <h1 class="text-center">Login</h1>
            <div>
                <div>
                    <label for="email1">Email address</label>
                    <input type="email" class="form-control" id="email1" placeholder="name@example.com">
                </div>
                <br>
                <div>
                    <label for="password1">Enter Password</label>
                    <input type="password" class="form-control" id="password1">
                </div>
                <br>
<div class="text-center">                <button class="btn w-50 btn-success">Login</button></div>
                <br>
            </div>
            <br>
           <div class="text-center"> <small>Don't an account? <button onclick="signupClick()" class="btn btn-sm btn-info text-white">signup</button></small> </div>
        </div>
    </div>
`;

var signupHtml = `

<div id="login" class="p-2 w-50 d-flex justify-content-center align-item-center">

        <div class="w-100">
        <h1 class="text-center">Signup</h1>
            <div>
                <div>
                    <label for="email1">Email address</label>
                    <input type="email" class="form-control" id="email1" placeholder="name@example.com">
                </div>
                <br>
                <div>
                    <label for="password1">Enter Password</label>
                    <input onkeyup="changedP()" onchange="changedP()" type="password" class="form-control" id="password1">
                </div>
<br>    <small class="text-danger d-none" id="passNoMatch">Passwords doesnot match</small>
                <div>
                    <label for="password1">Confirm Password</label>
                    <input onkeyup="changedP()" onchange="changedP()" type="password" class="form-control" id="password2">
                </div>
                <br>
<div class="text-center">                <button id="btn1" class="disabled btn w-50 btn-success">Signup</button></div>
                <br>
            </div>
            <br>
           <div class="text-center"> <small>Already have an account? <button onclick="loginClick()" class="btn btn-sm btn-info text-white">Login</button></small> </div>
        </div>
    </div>
`;


document.getElementById('base').innerHTML = loginHtml;

function signupClick() {
    document.getElementById('base').innerHTML = signupHtml;
}

function loginClick() {
    document.getElementById('base').innerHTML = loginHtml;
}
function changedP() {
    if ((document.getElementById('password1').value && document.getElementById('password2').value) != "") {
        if ((document.getElementById('password1').value === document.getElementById('password2').value)) {

            document.getElementById('passNoMatch').classList.add('d-none');
            document.getElementById('btn1').classList.remove('disabled');
        }
        else {
            document.getElementById('passNoMatch').classList.remove('d-none');
            document.getElementById('btn1').classList.add('disabled');
        }
    }
}