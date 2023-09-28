const tinderUser = new Object()
const tinderuser = {}

tinderUser.id = "124gfg"
tinderUser.name = "Andries"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regUser = {
    email: "strnge@yahoo.com",
    fullname: {
        userfullname: {
            fisrtname: "Chavanuk",
            lastname: "kreli"
        }
    }
}

// console.log(regUser.fullname.userfullname);

const obj1 = {1: "a", 2: "n"}
const obj2 = {3: "J", 4: "K"}

// const obj3 = Object.assign({}, obj1, obj2) // {} it means all the objects targeted into that bracket, ptherwise all the objects combined into 1st obj, so {}, is the good practoce to use.
const obj3 = {...obj1, ...obj2} // spread operator 
console.log(obj3);

const users = [
    {
        id:1,
        email: "h2f@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email // to access th 1st value

console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
    coursename: "Js in Gujju",
    price: "1001",
    courseguru: "PoteBhai"
}
// course.courseguru

const {courseguru: guru} = course

console.log(courseguru);

// const navbar = ({company}) => {

// }   // for react use more imp.

// navbar(company = "hijieth")



// ************** API intro with JSON *********************

// JSON:
// {
//     name: "purvish",
//     coursenam: "js in Gujju",
//     price: "free"
// }

[
    {},
    {},
    {}
]

 /* example of json objetcs :
 {
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  } */