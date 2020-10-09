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
 
 
## 3. /data/typeChart
![](imgs/typeChart.PNG) Just plot it with all of this data, dont mind the weird column names, its because of the mock data.
Return Type:
```javascript
{
    "Environmental education; Integrated": 2,
    "Integrated": 7,
    "Hunger & homelessness": 146,
    "Environmental education": 14,
    "Children and youth; Elderly; Hunger & homelessness": 36,
    "Children and youth": 13,
    "Children and youth; People with disabilities": 21,
    "Environmental education; Women": 1,
    "Hungers and homeless": 14,
    "Elderly": 77,
    "Children and youth; Environmental education": 11,
    "Children and youth; Ethnic minorities": 4,
    "People with mental illness": 1,
    "Elderly; People with illness": 6,
    "Adults; Elderly; Environmental education": 1,
    "Adults; Children and youth; Elderly; People with disabilities": 1,
    "Adults; Children and youth; Elderly": 2,
    "Refugees and asylum seekers": 1,
    "Other": 1,
    "Adults; Children and youth; Elderly; Refugees and asylum seekers; Women": 2,
    "": 13,
    "Animals": 43,
    "Women": 2,
    "Environmental education; Hunger & homelessness": 47,
    "People with disabilities; People with mental illness": 12,
    "Children and youth; Refugees and asylum seekers": 1
}
```

## 4. /data/attendanceChart
![](imgs/attendanceChart.PNG) Data is returned as JSON, refer to the picture and text below. (Image is outdated, numbers are replaced by last 4 digits of the OccurenceID)
```javascript
{
    "6866": {
        "Needed": 200,
        "Confirmed": 2,
        "Attended": 0
    },
    "6868": {
        "Needed": 50,
        "Confirmed": 0,
        "Attended": 0
    },
    "6870": {
        "Needed": 20,
        "Confirmed": 0,
        "Attended": 0
    },
    "6871": {
        "Needed": 20,
        "Confirmed": 15,
        "Attended": 0
    },
    "6881": {
        "Needed": 3,
        "Confirmed": 0,
        "Attended": 0
    },
    .
    .
    .
```

## 5. /data/genderChart
![](imgs/genderChart.PNG) Returned data is as follows.
```javascript
{
    "Male": 1,
    "Female": 8,
    "Others": 10
}
```

