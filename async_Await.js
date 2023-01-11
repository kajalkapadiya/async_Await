console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {

    const wifebringingticket = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ticket"), 3000)
    });
    
    // const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    // const addButter = new Promise((resolve, reject) => resolve(`butter`));
    // const addcoldDrink = new Promise((resolve, reject) => resolve(`cold drink`));
    const getcandy = new Promise((resolve, reject) => resolve(`candy`));
    const getCoke = new Promise((resolve, reject) => resolve(`coke`));

    let ticket = await wifebringingticket;

    let [candy, coke]= await Promise.all([getcandy,getCoke])

    console.log(`${candy}, ${coke}`);
    return ticket;
}

    // console.log(`wife: i have the ${ticket}`)
    // console.log("husband: we should go in");
    // console.log("wife: no i am hungry");

    // let popcorn = await getPopcorn;

    // console.log(`husbund: i got some ${popcorn}`);
    // console.log("wife: i want butter on my popcorn");
    // console.log("husbund: i got butter");

    // let butter = await addButter;

    // console.log(`husband: i got some ${butter}`);
    // console.log(`husband: we'r getting late`);
    // console.log(`wife: oh thanks for reminder but please i want a cold drink also`);
   
    // let coldDrink = await addcoldDrink;

    // console.log(`husband: darling! i got ${coldDrink} also we should go now`);
    // console.log(`wife: thank you so much my sweet husband, let's go now`);

    // return ticket;
    // }

    preMovie().then((m) => console.log(`person3: shows ${m}`));

    console.log("person4: shows ticket");
    console.log("person5: shows ticket");
