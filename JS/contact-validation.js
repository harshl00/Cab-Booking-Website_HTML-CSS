//Contact Form Validation

$(document).ready(function() {
    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
            },

            mobile_num: {
                required: true,
                number: true,
                maxlength: 10,
                minlength: 10
            },

            email: {
                required: true,
                email: true,
            },

            transfer: {
                required: true,
            },

            pup_location: {
                required: true,
            },

            doff_location: {
                required: true,
            },

            s_car: {
                required: true,
            },

            date: {
                required: true,
            },

            time: {
                required: true,
            }
        },

        messages: {
            name: "Please Enter Your Name",
            mobile_num: {
                required: "Please Enter Your Mobile Number",
                number: "Please Enter a 10 digit number",
                maxlength: "Enter 10 Digit Number",
                minlength: "Enter 10 Digit Number"
            },

            email: {
                required: "Please Enter Your Email Address",
                email: "Please Enter A Valid Email"
            },

            transfer: "Please Enter Your Prefered type",
            pup_location: "Please Select Your Pickup Location",
            doff_location: "Please Select Your Drop-Off Location",
            s_car: "Please Select Your Preferred Car",
            date: "Please Enter The Date Of PickUp",
            time: "Please Select The Time Of PickUp"
        },

        submitHandler: function(form) {
            form.submit();
        }
    })
})