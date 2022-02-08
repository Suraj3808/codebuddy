// level {1/2/3}
##level

async function GET_daTA() {
    try {
        let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let DATA = await r.json();
        return DATA;
    }catch (e) {
        return e;
    }
}

GET_daTA();

##level 2

async const getUsers = () => {
    try{
    let doc = await Promise.all(getUser(), getProfile(), getPosts());

    let user = doc[0];
    let Profile = doc[1];
    let p = doc[2];

    const userProfile = {
        user: user,
        profile: Profile,
        posts: p
    };
      return userProfile;
    } catch(err) {
        return err;
    }

}

getUsers();


##level 3

async const getUsers = (users) => {
    try {
        const new_users = [];

        for (item in new_users) {
            const newUser = user[item];
            newUser.id = item;
        }

        return new_users;
        new_users.push(newUser);
    } catch (e) {
        return e
    }

}

getUsers(userData);