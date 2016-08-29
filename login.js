function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.user.value == "myuserid" && form.password.value == "mypswrd") {
                	window.open('','_self').close();
                	window.open('Products.jsp')/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            }