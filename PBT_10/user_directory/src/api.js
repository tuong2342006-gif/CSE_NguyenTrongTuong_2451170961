const BASE_URL = "https://jsonplaceholder.typicode.com";

export const api = {

async getUsers() {
const res = await fetch(`${BASE_URL}/users`);

if(!res.ok) throw new Error("Load users failed");

return await res.json();
},

async getUser(id) {
const res = await fetch(`${BASE_URL}/users/${id}`);

if(!res.ok) throw new Error("Load user failed");

return await res.json();
},

async createUser(data) {

const res = await fetch(`${BASE_URL}/users`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

if(!res.ok) throw new Error("Create failed");

return await res.json();
},

async updateUser(id,data){

const res = await fetch(
`${BASE_URL}/users/${id}`,
{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
}
);

if(!res.ok) throw new Error("Update failed");

return await res.json();
},

async deleteUser(id){

const res = await fetch(
`${BASE_URL}/users/${id}`,
{
method:"DELETE"
}
);

if(!res.ok) throw new Error("Delete failed");

return true;
}

};
