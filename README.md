## Team 13 - SoftwareHeroes

## 1. /web/signup
![](imgs/signup.PNG) On successfull signup, JWT (java web token) is returned which is used as a header in all other API calls. The parameters are: Email, Password, Name, Age, Gender, Mobile, Location

## 2. /web/login
###  2.1. Authentication
       On valid credentials (email and password), a JWT is returned. 
       ![](imgs/login.PNG)
###  2.2. Invalid credentials
       On invalid credentials, JWT is not returned and an error message is returned. 
       ![](imgs/login-incorrect.PNG)
