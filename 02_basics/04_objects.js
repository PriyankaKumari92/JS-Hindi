// aise bhi object ko define kar shkte hai 

//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123",
tinderUser.email = "pksing@gmail.com",
tinderUser.isLoggedIn = false

console.log(tinderUser);


// object looping : object ke ander bhi object 

const regulorUser = {
    email: "pk@gmail.com",
    fullname: {
        userfullname: {
            fistname: "priyanka",
            lastname: "singh"
        }
    }
    }

    console.log(regulorUser.fullname.userfullname.fistname);

    // 3 different object merge into single array

    const obj1 = {1: 'a', 2: "b",}
    const obj2 = {3: 'a', 4: "b",}
    const obj3 = {5: 'a', 6: "b",}

    const obj4 = Object.assign({}, obj1, obj2, obj3)

    // {} to merge all obj into that but if not put that value obj2, obj3 merge into obj1
console.log(obj4);

const user = [
    {
        id: "1",
        email: "pk@gmail.com"
    },

    {
        id: "1",
        email: "pk@gmail.com"
    },
    {
        id: "1",
        email: "pk@gmail.com"
    },
    {
        id: "1",
        email: "pk@gmail.com"
    },
    {
        id: "1",
        email: "pk@gmail.com"
    }

]

user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty("isLoggedaIn"));
console.log(Object.hasOwnProperty("id"));

