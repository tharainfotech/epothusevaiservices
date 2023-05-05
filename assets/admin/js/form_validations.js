$(function(){
	jQuery.validator.addMethod("country_phone", function(value, element) {
  return this.optional(element) || /^\+(?:[0-9] ?){6,14}[0-9]$/.test(value);
}, "Please Enter Valid Phone Number");

	$('#loginform').validate({
		rules: {
			useremail:{
				required: true,
				email: true,
			},
			password:{
				required:true,
			},
		},
		messages:{
			useremail:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span'
			},
			password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',	
			},
		}

	});

	$('#forgot_form').validate({
		rules: {
			user_email:{
				required: true,
				email: true,
			},
		},
		messages:{
			user_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span'
			},
		}

	});

	$('#update_profile').validate({
		rules: {
			admin_name:{
				required: true,
			},
			admin_email:{
				required: true,
				email: true,
			},
			admin_phone:{
				required: true,
				number: true,
			},
		},
		messages:{
			admin_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			admin_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span'
			},
			admin_phone:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Contact number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter numbers only !!</span>',	
			},
		},

	});

	$('#update_profile_password').validate({
		rules: {
			password:{
				required: true,
				minlength:6,
			},
			conf_password:{
				required: true,
				equalTo:'#password',
			},
		},
		messages:{
			password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
		},

	});

	$('#add_super_distributer').validate({
		rules: {
			super_distributer_name:{
				required: true,
			},
			super_distributer_email:{
				required: true,
				email: true,
				remote: {
                    url: 'super_distributer/email_check',
                    type: 'post',
                },
			},
			super_distributer_password:{
				required: true,
				minlength:6,
			},
			super_distributer_conf_password:{
				required: true,
				equalTo:'#super_distributer_password',
			},
			super_distributer_mobile:{
				required: true,
				number: true,
			},
			super_distributer_shop:{
				required: true,
			},
			super_distributer_address:{
				required: true,
			},
			super_distributer_pan:{
				required: true,
			},
			super_distributer_aadhar:{
				required: true,
			},
			super_distributer_aadhar_file:{
				required: true,
			},
		},
		messages:{
			super_distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			super_distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
				remote:'<span style="color: #ff0000; font-size: 12px;">Email already in use !!</span>',
			},
			super_distributer_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			super_distributer_conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			super_distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			super_distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			super_distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			super_distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			super_distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
			super_distributer_aadhar_file:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Upload Aadhar Document !!</span>',
			},
		},

	});

	$('#edit_super_distributer').validate({
		rules: {
			super_distributer_name:{
				required: true,
			},
			super_distributer_email:{
				required: true,
				email: true,
			},
			super_distributer_password:{
				minlength:6,
			},
			super_distributer_conf_password:{
				equalTo:'#super_distributer_password',
			},
			super_distributer_mobile:{
				required: true,
				number: true,
			},
			super_distributer_shop:{
				required: true,
			},
			super_distributer_address:{
				required: true,
			},
			super_distributer_pan:{
				required: true,
			},
			super_distributer_aadhar:{
				required: true,
			},
		},
		messages:{
			super_distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			super_distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
			},
			super_distributer_password:{
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			super_distributer_conf_password:{
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			super_distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			super_distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			super_distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			super_distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			super_distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
		},

	});

	$('#add_distributer').validate({
		rules: {
			distributer_super_distributer:{
				required:true,
			},
			distributer_name:{
				required: true,
			},
			distributer_super_distributer:{
				required:true,
			},
			distributer_email:{
				required: true,
				email: true,
				remote: {
                    url: 'distributer/email_check',
                    type: 'post',
                },
			},
			distributer_password:{
				required: true,
				minlength:6,
			},
			distributer_conf_password:{
				required: true,
				equalTo:'#distributer_password',
			},
			distributer_mobile:{
				required: true,
				number: true,
			},
			distributer_shop:{
				required: true,
			},
			distributer_address:{
				required: true,
			},
			distributer_pan:{
				required: true,
			},
			distributer_aadhar:{
				required: true,
			},
			distributer_aadhar_file:{
				required: true,
			},
		},
		messages:{
			distributer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
				remote:'<span style="color: #ff0000; font-size: 12px;">Email already in use !!</span>',
			},
			distributer_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			distributer_conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
			distributer_aadhar_file:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Upload Aadhar Document !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "distributer_super_distributer") 
            {
                error.insertAfter("#distributer_super_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#edit_distributer').validate({
		rules: {
			distributer_super_distributer:{
				required:true,
			},
			distributer_name:{
				required: true,
			},
			distributer_email:{
				required: true,
				email: true,
			},
			distributer_password:{
				minlength:6,
			},
			distributer_conf_password:{
				equalTo:'#distributer_password',
			},
			distributer_mobile:{
				required: true,
				number: true,
			},
			distributer_shop:{
				required: true,
			},
			distributer_address:{
				required: true,
			},
			distributer_pan:{
				required: true,
			},
			distributer_aadhar:{
				required: true,
			},
		},
		messages:{
			distributer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			distributer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			distributer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
			},
			distributer_password:{
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			distributer_conf_password:{
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			distributer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			distributer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			distributer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			distributer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			distributer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "distributer_super_distributer") 
            {
                error.insertAfter("#distributer_super_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#add_retailer').validate({
		rules: {
			retailer_super_distributer:{
				required: true,
			},
			retailer_distributer:{
				required: true,
			},
			retailer_name:{
				required: true,
			},
			retailer_email:{
				required: true,
				email: true,
				remote: {
                    url: 'retailer/email_check',
                    type: 'post',
                },
			},
			retailer_password:{
				required: true,
				minlength:6,
			},
			retailer_conf_password:{
				required: true,
				equalTo:'#retailer_password',
			},
			retailer_mobile:{
				required: true,
				number: true,
			},
			retailer_shop:{
				required: true,
			},
			retailer_address:{
				required: true,
			},
			retailer_pan:{
				required: true,
			},
			retailer_aadhar:{
				required: true,
			},
			retailer_aadhar_file:{
				required: true,
			},
		},
		messages:{
			retailer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			retailer_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Distributer !!</span>',
			},
			retailer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			retailer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
				remote:'<span style="color: #ff0000; font-size: 12px;">Email already in use !!</span>',
			},
			retailer_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			retailer_conf_password:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Password again !!</span>',
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			retailer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			retailer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			retailer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			retailer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			retailer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
			retailer_aadhar_file:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Upload Aadhar Document !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "retailer_super_distributer") 
            {
                error.insertAfter("#retailer_super_distributer_error");
            }
            else if(element.attr("name") == "retailer_distributer") 
            {
                error.insertAfter("#retailer_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#edit_retailer').validate({
		rules: {
			retailer_super_distributer:{
				required: true,
			},
			retailer_distributer:{
				required: true,
			},
			retailer_name:{
				required: true,
			},
			retailer_email:{
				required: true,
				email: true,
			},
			retailer_password:{
				minlength:6,
			},
			retailer_conf_password:{
				equalTo:'#retailer_password',
			},
			retailer_mobile:{
				required: true,
				number: true,
			},
			retailer_shop:{
				required: true,
			},
			retailer_address:{
				required: true,
			},
			retailer_pan:{
				required: true,
			},
			retailer_aadhar:{
				required: true,
			},
		},
		messages:{
			retailer_super_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Super Distributer !!</span>',
			},
			retailer_distributer:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Distributer !!</span>',
			},
			retailer_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			retailer_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Email !!</span',
			},
			retailer_password:{
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter atleast Six digits !!</span>',
			},
			retailer_conf_password:{
				equalTo:'<span style="color: #ff0000; font-size: 12px;">Password Mismatch !!</span'
			},
			retailer_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',	
			},
			retailer_shop:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Shop Name !!</span>',
			},
			retailer_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			retailer_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter PAN number !!</span>',
			},
			retailer_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "retailer_super_distributer") 
            {
                error.insertAfter("#retailer_super_distributer_error");
            }
            else if(element.attr("name") == "retailer_distributer") 
            {
                error.insertAfter("#retailer_distributer_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#view_payout').validate({
		rules: {
			payout_amount:{
				required: true,
				number:true,
			},
		},
		messages:{
			payout_amount:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Amount !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter numbers only !!</span>',	
			},
		},

	});

	$('#website_settings').validate({
		rules: {
			website_name:{
				required: true,
			},
			website_address:{
				required: true,
			},
			website_phone1:{
				required: true,
				number: true,
			},
			website_email:{
				required: true,
				email: true,
			},
		},
		messages:{
			website_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			website_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			website_phone1:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Phone Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Phone Number !!</span>',
			},
			website_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Provide Valid Email !!</span>',
			},
		},

	});

	$('#account_settings').validate({
		ignore: [],
        debug: false,
		rules: {
			super_distributer_price:{
				required: true,
				number:true,
			},
			super_distributer_details: {
                required: function(textarea) {
                   CKEDITOR.instances[textarea.id].updateElement();
                   var editorcontent = textarea.value.replace(/<[^>]*>/gi, '');
                   return editorcontent.length === 0;
                }
            },
            distributer_price:{
				required: true,
				number:true,
			},
			distributer_details: {
                required: function(textarea) {
                   CKEDITOR.instances[textarea.id].updateElement();
                   var editorcontent = textarea.value.replace(/<[^>]*>/gi, '');
                   return editorcontent.length === 0;
                }
            },
			retailer_price:{
				required: true,
				number:true,
			},
			retailer_details: {
                required: function(textarea) {
                   CKEDITOR.instances[textarea.id].updateElement();
                   var editorcontent = textarea.value.replace(/<[^>]*>/gi, '');
                   return editorcontent.length === 0;
                }
            },
		},
		messages:{
			super_distributer_price:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Price !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Number !!</span>',
			},
			super_distributer_details:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Details !!</span>',
			},
			distributer_price:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Price !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Number !!</span>',
			},
			distributer_details:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Details !!</span>',
			},
			retailer_price:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Price !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Number !!</span>',
			},
			retailer_details:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Details !!</span>',
			},
		},
		errorPlacement: function(error, element) {
          
			if(element.attr("name") == "super_distributer_details") 
			{
			  error.appendTo($('#super_distributer_details_error'));
			} 
			else if(element.attr("name") == "distributer_details") 
			{
			  error.appendTo($('#distributer_details_error'));
			} 
			else if(element.attr("name") == "retailer_details") 
			{
			  error.appendTo($('#retailer_details_error'));
			}      
			else 
			{
			  error.insertAfter(element);
			}
  
		  }

	});

	$('#razorpay_settings').validate({
		rules: {
			upi_api_key:{
				required: true,
			},
			upi_secret_key:{
				required: true,
			},
			upi_uid:{
				required: true,
			},
			upi_commission:{
				required: true,
			},
		},
		messages:{
			upi_api_key:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Api Key !!</span>',
			},
			upi_secret_key:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Secret Key !!</span>',
			},
			upi_uid:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter UID !!</span>',
			},
			upi_commission:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Extra Charge !!</span>',
			},
		},

	});

	$('#update_bank').validate({
		rules: {
			bank_name:{
				required: true,
			},
			bank_acc_holder:{
				required: true,
			},
			ifsc:{
				required: true,
			},
			account_number:{
				required: true,
				number: true,
			},
		},
		messages:{
			bank_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Bank Name !!</span>',
			},
			bank_acc_holder:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Account Holder Name !!</span>',
			},
			ifsc:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter IFSC !!</span>',
			},
			account_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Account Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Number !!</span>',
			},
		},

	});

	$('#request_form').validate({
		rules: {
			request_name:{
				required:true,
			},
			request_mobile:{
				required:true,
				number:true,
			},
		},
		messages:{
			request_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			request_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile Number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Number !!</span>',	
			},

		}

	});

	$('#request_view').validate({
		rules: {
			request_name:{
				required:true,
			},
			request_mobile:{
				required:true,
				number:true,
			},
		},
		messages:{
			request_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			request_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile Number !!</span>',	
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Number !!</span>',	
			},

		}

	});

	$('#ticket_add').validate({
		rules: {
			ticket_category:{
				required:true,
			},
			ticket_subcategory:{
				required:true,
			},
			ticket_priority:{
				required:true,
			},
			ticket_message:{
				required:true,
			},
		},
		messages:{
			ticket_category:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Category !!</span>',
			},
			ticket_subcategory:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Sub category !!</span>',		
			},
			ticket_priority:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Priority !!</span>',
			},
			ticket_message:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Message !!</span>',
			},

		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "ticket_category") 
            {
                error.insertAfter("#ticket_category_error");
            }
            else if(element.attr("name") == "ticket_subcategory") 
            {
                error.insertAfter("#ticket_subcategory_error");
            }
            else if(element.attr("name") == "ticket_priority") 
            {
                error.insertAfter("#ticket_priority_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#ticket_messages').validate({
		rules: {
			ticket_message:{
				required:true,
			},
		},
		messages:{
			ticket_message:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Message !!</span>',
			},

		}

	});

	$('#add_wallet').validate({
		rules: {
			wallet_amount:{
				required: true,
				number: true,
			},
		},
		messages:{
			wallet_amount:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter The Amount !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter a Valid Number !!</span'
			},
		}

	});

	$('#upi_wallet').validate({
		rules: {
			wallet_request_uid:{
				required:true,
			},
		},
		messages:{
			wallet_request_uid:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter UTR !!</span>',
			},

		}

	});

	$('#order_form').validate({
		rules: {
			order_name:{
				required:true,
			},
			order_email:{
				email:true,
			},
			order_address1:{
				required:true,
			},
			order_contact:{
				required:true,
				number:true,
			},
		},
		messages:{
			order_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			order_email:{
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Email !!</span>',
			},
			order_address1:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			order_contact:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Contact Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Number !!</span>',
			},

		}

	});

	$('#mobile_recharge').validate({
		rules: {
			recharge_number:{
				required:true,
				number:true,
				minlength:10,
				maxlength:10,
			},
			recharge_provider:{
				required:true,
			},
			recharge_amount:{
				required:true,
				number:true,
			},
		},
		messages:{
			recharge_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Valid Number Only !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Atleast 10 Digits !!</span>',
				maxlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only 10 Digits !!</span>',
			},
			recharge_provider:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Service Provider !!</span>',
			},
			recharge_amount:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Recharge Amount !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Valid Number Only !!</span>',
			},
		}
	});

	$('#dth_recharge').validate({
		rules: {
			recharge_number:{
				required:true,
				number:true,
			},
			recharge_provider:{
				required:true,
			},
			recharge_amount:{
				required:true,
				number:true,
			},
			recharge_mobile:{
				required:true,
				number:true,
				minlength:10,
				maxlength:10,
			},
		},
		messages:{
			recharge_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Valid Number Only !!</span>',
			},
			recharge_provider:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Service Provider !!</span>',
			},
			recharge_amount:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Recharge Amount !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Valid Number Only !!</span>',
			},
			recharge_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Valid Number Only !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Atleast 10 Digits !!</span>',
				maxlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only 10 Digits !!</span>',
			},

		}

	});

	$('#can_edit').validate({
		rules: {
			can_edit_number:{
				required:true,
			},
			can_edit_aadhar:{
				required:true,
			},
			can_edit_mobile:{
				required:true,
			},
			can_edit_dob:{
				required:true,
			},
			can_edit_ename:{
				required:true,
			},
			can_edit_tname:{
				required:true,
			},
			can_edit_findtxt:{
				required:true,
			},
		},
		messages:{
			can_edit_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Number !!</span>',
			},
			can_edit_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Select Service Provider !!</span>',
			},
			can_edit_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile Number !!</span>',
			},
			can_edit_dob:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose DOB !!</span>',
			},
			can_edit_ename:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name in English !!</span>',
			},
			can_edit_tname:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name in Tamil !!</span>',
			},
			can_edit_findtxt:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Find Certificate !!</span>',
			},

		}

	});

	$('#psmt_status').validate({
		rules: {
			application_number:{
				required:true,
				number:true,
			},
		},
		messages:{
			application_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Application Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
			},
		}

	});

	$('#registration_document').validate({
		rules: {
			document_office:{
				required:true,
			},
			document_number:{
				required:true,
			},
			document_year:{
				required:true,
			},
		},
		messages:{
			document_office:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Register Office !!</span>',
			},
			document_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Document Number !!</span>',
			},
			document_year:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Document Year !!</span>',
			},
		}

	});

	$('#id_card_req').validate({
		rules: {
			id_card_name:{
				required:true,
			},
			id_card_number:{
				required:true,
			},
		},
		messages:{
			id_card_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			id_card_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Register Number !!</span>',
			},
		}

	});

	$('#e_seva_form').validate({
		rules: {
			e_seva_can_number:{
				required:true,
			},
			e_seva_name:{
				required:true,
			},
			e_seva_tname:{
				required:true,
			},
			e_seva_gender:{
				required:true,
			},
			e_seva_marital:{
				required:true,
			},
			e_seva_relation:{
				required:true,
			},
			e_seva_father:{
				required:true,
			},
			e_seva_tfather:{
				required:true,
			},
			e_seva_mother:{
				required:true,
			},
			e_seva_tmother:{
				required:true,
			},
			e_seva_religion:{
				required:true,
			},
			e_seva_community:{
				required:true,
			},
			e_seva_aadhar:{
				required:true,
				number:true,
			},
			e_seva_dob:{
				required:true,
			},
			e_seva_mobile:{
				required:true,
				number:true,
				minlength:10,
				maxlength:10,
			},
			e_seva_email:{
				required:true,
				email:true,
			},
			e_seva_occupation:{
				required:true,
			},
			e_seva_education:{
				required:true,
			},
			e_seva_district:{
				required:true,
			},
			e_seva_taluk:{
				required:true,
			},
			e_seva_village:{
				required:true,
			},
			e_seva_unit:{
				required:true,
			},
			e_seva_area:{
				required:true,
			},
			e_seva_street:{
				required:true,
			},
			e_seva_tstreet:{
				required:true,
			},
			e_seva_block:{
				required:true,
			},
			e_seva_build:{
				required:true,
			},
			e_seva_pincode:{
				required:true,
				number:true,
			},
			e_seva_pdistrict:{
				required:true,
			},
			e_seva_ptaluk:{
				required:true,
			},
			e_seva_pvillage:{
				required:true,
			},
			e_seva_punit:{
				required:true,
			},
			e_seva_parea:{
				required:true,
			},
			e_seva_pstreet:{
				required:true,
			},
			e_seva_ptstreet:{
				required:true,
			},
			e_seva_pblock:{
				required:true,
			},
			e_seva_pbuild:{
				required:true,
			},
			e_seva_ppincode:{
				required:true,
				number:true,
			},
			e_seva_comm_community:{
				required:true,
			},
			e_seva_subcaste:{
				required:true,
			},
			e_seva_alive_year:{
				required:true,
				number:true,
			},
			e_seva_obc_subcaste:{
				required:true,
			},
			e_seva_laststudied:{
				required:true,
			},
			e_seva_yearofpassing:{
				required:true,
				number:true,
				minlength:4,
				maxlength:4,
			},
			e_seva_institute:{
				required:true,
			},
			e_seva_curredu:{
				required:true,
			},
			e_seva_marginal_district:{
				required:true,
			},
			e_seva_marginal_taluk:{
				required:true,
			},
			e_seva_marginal_village:{
				required:true,
			},
			e_seva_widow_death_date:{
				required:true,
			},
			e_seva_widow_certificate_number:{
				required:true,
			},
			e_seva_patta_district:{
				required:true,
			},
			e_seva_patta_taluk:{
				required:true,
			},
			e_seva_patta_village:{
				required:true,
			},
			e_seva_patta_regno:{
				required:true,
			},
			e_seva_patta_regdate:{
				required:true,
			},
			e_seva_patta_sro:{
				required:true,
			},
			e_seva_patta_reason:{
				required:true,
			},
			e_seva_noof_member:{
				required:true,
			},
			e_seva_rentpaid:{
				required:true,
			},
			e_seva_bpl:{
				required:true,
			},
		},
		messages:{
			e_seva_can_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter CAN Number !!</span>',
			},
			e_seva_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			e_seva_tname:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name in Tamil !!</span>',
			},
			e_seva_gender:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Gender !!</span>',
			},
			e_seva_marital:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Marital Status !!</span>',
			},
			e_seva_relation:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Relation !!</span>',
			},
			e_seva_father:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			e_seva_tfather:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name in Tamil!!</span>',
			},
			e_seva_mother:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mother Name !!</span>',
			},
			e_seva_tmother:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mother Name in Tamil!!</span>',
			},
			e_seva_religion:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Religion !!</span>',
			},
			e_seva_community:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Community !!</span>',
			},
			e_seva_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
			},
			e_seva_dob:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter DOB !!</span>',
			},
			e_seva_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Atleast 10 Digits !!</span>',
				maxlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only 10 Digits !!</span>',
			},
			e_seva_email:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Email !!</span>',
				email:'<span style="color: #ff0000; font-size: 12px;">Please Enter Valid Email !!</span>',
			},
			e_seva_occupation:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Occupation!!</span>',
			},
			e_seva_education:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Education Qualification !!</span>',
			},
			e_seva_district:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose District !!</span>',
			},
			e_seva_taluk:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Taluk !!</span>',
			},
			e_seva_village:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Village !!</span>',
			},
			e_seva_unit:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Unit !!</span>',
			},
			e_seva_area:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Area !!</span>',
			},
			e_seva_street:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Street Name !!</span>',
			},
			e_seva_tstreet:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Street Name in Tamil !!</span>',
			},
			e_seva_block:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Block No / Name !!</span>',
			},
			e_seva_build:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Building / Door / Flat No !!</span>',
			},
			e_seva_pincode:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Pincode !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
			},
			e_seva_pdistrict:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose District !!</span>',
			},
			e_seva_ptaluk:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Taluk !!</span>',
			},
			e_seva_pvillage:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Village !!</span>',
			},
			e_seva_punit:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Unit !!</span>',
			},
			e_seva_parea:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Area !!</span>',
			},
			e_seva_pstreet:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Street Name !!</span>',
			},
			e_seva_ptstreet:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Street Name in Tamil !!</span>',
			},
			e_seva_pblock:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Block No / Name !!</span>',
			},
			e_seva_pbuild:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Building / Door / Flat No !!</span>',
			},
			e_seva_ppincode:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Pincode !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
			},
			e_seva_comm_community:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Community !!</span>',
			},
			e_seva_subcaste:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Sub Caste !!</span>',
			},
			e_seva_alive_year:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Years !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
			},
			e_seva_obc_subcaste:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Sub Caste !!</span>',
			},
			e_seva_laststudied:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Last Studied !!</span>',
			},
			e_seva_yearofpassing:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Year !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Atleast 4 Digits !!</span>',
				maxlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only 4 Digits !!</span>',
			},
			e_seva_institute:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Institute Name !!</span>',
			},
			e_seva_curredu:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Current Education !!</span>',
			},
			e_seva_marginal_district:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter District !!</span>',
			},
			e_seva_marginal_taluk:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Taluk !!</span>',
			},
			e_seva_marginal_village:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Village !!</span>',
			},
			e_seva_widow_death_date:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Death Date !!</span>',
			},
			e_seva_widow_certificate_number:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Death Certificate Number !!</span>',
			},
			e_seva_patta_district:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter District !!</span>',
			},
			e_seva_patta_taluk:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Taluk !!</span>',
			},
			e_seva_patta_village:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Village !!</span>',
			},
			e_seva_patta_regno:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Registered Doc No !!</span>',
			},
			e_seva_patta_regdate:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Registered Date !!</span>',
			},
			e_seva_patta_sro:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter SRO Name !!</span>',
			},
			e_seva_patta_reason:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Patta Reason !!</span>',
			},
			e_seva_noof_member:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter No of Members !!</span>',
			},
			e_seva_rentpaid:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Rent Paid !!</span>',
			},
			e_seva_bpl:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter BPL ID !!</span>',
			},
		}

	});

	$('#find_pan').validate({
		rules: {
			find_pan_name:{
				required:true,
			},
			find_pan_aadhar:{
				required:true,
				number:true,
			},
			find_pan_dob:{
				required:true,
			},
			
		},
		messages:{
			find_pan_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			find_pan_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
			},
			find_pan_dob:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter DOB !!</span>',
			},
			
		}

	});

	$('#pan_pdf').validate({
		rules: {
			pan_pdf_name:{
				required:true,
			},
			pan_pdf_aadhar:{
				required:true,
				number:true,
			},
			pan_pdf_dob:{
				required:true,
			},
			pan_pdf_pan:{
				required:true,
			},
			
		},
		messages:{
			pan_pdf_name:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Name !!</span>',
			},
			pan_pdf_aadhar:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Aadhar Number !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Numbers !!</span>',
			},
			pan_pdf_dob:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter DOB !!</span>',
			},
			pan_pdf_pan:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please PAN Number !!</span>',
			},
			
		}

	});

	$('#dmt_verify').validate({
		rules: {
			dmt_mobile:{
				required:true,
				number:true,
				minlength:10,
				maxlength:10,
			},
		},
		messages:{
			dmt_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile Numebr!!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Number!!</span>',
				minlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Minimum 10 Digits!!</span>',
				maxlength:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only 10 Digits!!</span>',
			},
		}

	});

	$('#dmt_register').validate({
		rules: {
			dmt_register_otp:{
				required:true,
				number:true,
			},
			dmt_register_firstname:{
				required:true,
			},
			dmt_register_lastname:{
				required:true,
			},
			dmt_register_dob:{
				required:true,
			},
			dmt_register_address:{
				required:true,
			},
			dmt_register_pincode:{
				required:true,
				number:true,
			},
			dmt_register_gst_state:{
				required:true,
			},
			dmt_register_bank3_flag:{
				required:true,
			},
		},
		messages:{
			dmt_register_otp:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Mobile Number!!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Number!!</span>',
			},
			dmt_register_firstname:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter First Name!!</span>',
			},
			dmt_register_lastname:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Last Name!!</span>',
			},
			dmt_register_dob:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter DOB!!</span>',
			},
			dmt_register_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address!!</span>',
			},
			dmt_register_pincode:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Pincode!!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Number!!</span>',
			},
			dmt_register_gst_state:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose State!!</span>',
			},
			dmt_register_bank3_flag:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Flag!!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            if(element.attr("name") == "dmt_register_gst_state") 
            {
                error.insertAfter("#dmt_register_gst_state_error");
            }
            else 
            {
                error.insertAfter(element);
            }
        }

	});


	$('#add_benificiary').validate({
		rules: {
			benificiary_mobile:{
				required:true,
			},
			benificiary_benename:{
				required:true,
			},
			benificiary_bankid:{
				required:true,
			},
			benificiary_accno:{
				required:true,
			},
			benificiary_ifsccode:{
				required:true,
			},
			benificiary_gst_state:{
				required:true,
			},
			benificiary_dob:{
				required:true,
			},
			benificiary_address:{
				required:true,
			},
			benificiary_pincode:{
				required:true,
				number:true,
			},
		},
		messages:{
			benificiary_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Mobile Number!!</span>',
			},
			benificiary_benename:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Beneficiary Name!!</span>',
			},
			benificiary_bankid:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Bank !!</span>',
			},
			benificiary_accno:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Account Number!!</span>',
			},
			benificiary_ifsccode:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter IFSC !!</span>',
			},
			benificiary_gst_state:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose State!!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Number!!</span>',
			},
			benificiary_dob:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter DOB!!</span>',
			},
			benificiary_address:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Address !!</span>',
			},
			benificiary_pincode:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Pincode !!</span>',
				number:'<span style="color: #ff0000; font-size: 12px;">Please Enter Only Number!!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            
			if(element.attr("name") == "benificiary_bankid") 
            {
                error.insertAfter("#benificiary_bankid_error");
            }
			else if(element.attr("name") == "benificiary_gst_state") 
            {
                error.insertAfter("#benificiary_gst_state_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#new_transaction').validate({
		rules: {
			transaction_mobile:{
				required:true,
			},
			transaction_benificiary:{
				required:true,
			},
			transaction_amount:{
				required:true,
			},
		},
		messages:{
			transaction_mobile:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Mobile Number!!</span>',
			},
			transaction_benificiary:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter Beneficiary Name!!</span>',
			},
			transaction_amount:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Choose Bank !!</span>',
			},
		},
		errorPlacement: function (error, element) {
            
            
			if(element.attr("name") == "transaction_mobile") 
            {
                error.insertAfter("#transaction_mobile_error");
            }
			else if(element.attr("name") == "transaction_benificiary") 
            {
                error.insertAfter("#transaction_benificiary_error");
            }
            else 
            {
                error.insertAfter(element)
            }
        }

	});

	$('#refund_transaction').validate({
		rules: {
			refund_otp:{
				required:true,
			},
		},
		messages:{
			refund_otp:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter OTP !!</span>',
			},
		},

	});

	$('#bharatpe_settings').validate({
		rules: {
			bharatpe_token:{
				required:true,
			},
			bharatpe_id:{
				required:true,
			},
		},
		messages:{
			bharatpe_token:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter BharatPe Token !!</span>',
			},
			bharatpe_id:{
				required:'<span style="color: #ff0000; font-size: 12px;">Please Enter BharatPe ID !!</span>',
			},
		},

	});

});


