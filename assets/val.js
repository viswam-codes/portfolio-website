$(document).ready(function(){
    $("#sign-upform").validate({
        rules:{
            fname:{
                required:true,
                minlength:5
            },
            fphone:{
                required:true,
                minlength:10,
                maxlength:10,
                Number:true
            
            },
            fmail:{
                required:true,
                email:true
            }

        },
        messages:{
            fname:{
                required:"Enter Your Name",
                minlength:"Include last name"
            },
            fphone:{
                required:"Enter your number",
                minlength:"at least 10 numbers",
                maxlength:"Invalid Number"

            },
            fmail:{
                required:"Enter your Mail Id",
                email:"Invalid Entry please enter your email id"
            }
        }
       
    })
})