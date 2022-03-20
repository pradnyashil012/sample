# Cryptonaukri Backend 
Test Server Link : `https://cryptonaukribackend.herokuapp.com/`
## End Points : 
#### User Routes
**- /api/v1/user/signup?coupon=someCoupon :** To add user to database.   
**- /api/v1/user/login :** To login   
**- /api/v1/user/otp?email=youremail :** To get OTP at particular email address   
**- /api/v1/user/changePassword :** To change the current password.
**- /api/v1/user/forgetPasswordOTP?email=youremail :** To get OTP for validation required to change password for changing password.
**- /api/v1/user/forgetPassword :** To change Password 
**- /api/v1/user/userDetails?email=emailOfUser :** To get user details (contains minimal info about user) [SUBJECT TO CHANGE IN FUTURE]  
  
**- /api/v1/user/loggedInUserDetails** : To get details of logged in user [Pass in JWT] (contains all the user info ) [SUBJECT TO CHANGE IN FUTURE]

#### Business Routes [/api/v1/business]
**- /signup?coupon=someCoupon :** To add user to database.   
**- /login :** To login   
**- /otp?email=youremail :** To get OTP at particular email address   
**- /changePassword :** To change the current password.
**- /forgetPasswordOTP?email=youremail :** To get OTP for validation required to change password for changing password.
**- /forgetPassword :** To change Password
**- /businessDetails?email=emailOfUser :** To get Business details (contains minimal info about user) [SUBJECT TO CHANGE IN FUTURE]   
**- /loggedInBusinessDetails** : To get details of logged-in Business [Pass in JWT] (contains all the user info ) [SUBJECT TO CHANGE IN FUTURE]   

#### Jobs [/api/v1/jobs]
- /postJob = To Post A Job
- /findJob = To Find Job (different queries to be added)
- /applyJob = To Apply for a job
- /findJob/:jobID = To find a specific Job

### Todo List : 
- ~~Adding Endpoint for Updating Password.~~
- ~~Adding Endpoint for Forget Password thing.~~
- ~~Implementing coupon code part.~~
- ~~endpoint for user details~~
- ~~Going through MVP list (for now)~~
- ~~getting credentials for the place where main backend is hosted rn~~
- ~~asking sir to make an account of redis cloud.~~
- ~~adding end point for business accounts~~
- ~~adding different kind of end points for jobs~~
- adding endpoints for internship 
- making an endpoint for user to update his/her resume 
- asking which parameters will we be using to retrieve different kind of jobs
- line 40 : jobsController

## Responses :
#### - OTP :
- If we fail to send in OTP :
```
                res.status(400).json({
                    code : "OTP_FAILED",
                    otpSent : false,
                    message : "Failed To send OTP"
                })
```
- If we detect that email on which we are trying to get OTP already exists :
```
        res.status(400).json({
            code : "DUPLICATE",
            userAdded : false,
            message : "Email ID already exists"
        });

```
- If OTP is sent successfully
```
                res.status(200).json({
                    code : "OTP_SENT",
                    otpSent : true,
                    message : "OTP sent"
                });
```
- If OTP entered is wrong 
```
         res.status(400).json({
            code : "WRONG_OTP",
            userAdded : false,
            message : "Wrong OTP"
        });
```

#### - User Signup :
- Sign up is successful 
```
            res.status(201).json({
                code : "USER_ADDED",
                userAdded : true,
                message : "user has been added successfully"
            });
```
- Duplication of email is found : (subject to change)
```
        res.status(400).json({
            code : "DUPLICATE",
            userAdded : false,
            message : "Email ID already exists"
        });
```
### - User Login :
##### JWT Secret Key = `JWT_KEY=CRYPTONAUKRI@12345`
- Login up is successful 
```
            response Header will contain : JWT Token 
            res.status(200).json({
            userLoggedIn : true ,
            code : "LOGGED_IN" ,
            message : "User Logged In Successfully"
        });
```
- For Wrong Email / Password
```
        res.status(400).json({
            userLoggedIn : false ,
            code : "WRONG_PASSWORD",
            message : "user's entered password was wrong"
        });
```
- If user is not found :
```
        res.status(404).json({
            userLoggedIn : false ,
            code : "NOT_FOUND" ,
            message : "user with such username does not exist"
        });
```

### - Change Password : 
- If Password Change is successful 
```
res.status(200).json({
            changedPassword : true ,
            code : "CHANGED_PASSWORD",
            message  : "changed the current password"
        });
```
- If Previous Password Doesn't match current Password
```
res.status(400).json({
            changedPassword : false ,
            code : "WRONG_PASSWORD",
            message  : "entered previous password is wrong"
        });
```
- If there is any error while changing password  
```
res.status(200).json({
            changedPassword : false ,
            code : "ERROR",
            message  : "An error occurred while updating the password"
        });
```


### - Forget Password : 
- Responses For conditions like password change is successful etc will be similar to that of previous responses.


## Schemas :
- User (Subject to change after addition of Internship and Job Posting stuff.)
```
firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    dateOfJoining : {
        type : Date,
        default : Date.now()
    },
    ROLE : {
        type : String,
        default : "USER"
    }
```

- Forget Password
```
{
    "email":"email@gmail.com",
    "newPassword":"password",
    "otp":3734
}
```
- Change Password (remember to pass in JWT)
```
{
    "previousPassword":"password",
    "newPassword":"postman"
}
```

#### Fixes
- Make Controller Methods and separate controller methods from routes.
- Improve schema
- giving proper end point url to routes.
- remove a hell lot of redundancy.
- to use middleware for role based authentication.
- ... many more.

