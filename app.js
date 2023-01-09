import axios from "axios";

 const getData = async (user_id) => {
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    const resultData = {"User": user,"Posts": posts}
    console.log(resultData);
}

export default getData;