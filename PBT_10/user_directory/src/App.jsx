import { useEffect,useState } from "react";
import { api } from "./api";
import { ui } from "./ui";
import "./App.css";

function App(){

const [users,setUsers]=useState([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");

const [form,setForm]=useState({
name:"",
email:""
});

const [editingId,setEditingId]=useState(null);

useEffect(()=>{
loadUsers();
},[]);

async function loadUsers(){

try{

```
 setLoading(ui.showLoading());

 const data=await api.getUsers();

 setUsers(ui.renderUsers(data));
```

}catch(err){

```
 ui.showError(err.message);
```

}finally{

```
 setLoading(ui.hideLoading());
```

}

}

async function handleSubmit(){

try{

```
 if(editingId){

   const updated=
   await api.updateUser(
     editingId,
     form
   );

   setUsers(
    users.map(user=>
      user.id===editingId
      ? updated
      : user
    )
   );

   ui.showSuccess("Updated");

 }else{

   const created=
   await api.createUser(form);

   created.id=Date.now();

   setUsers([
     created,
     ...users
   ]);

   ui.showSuccess("Created");

 }

 setForm({
   name:"",
   email:""
 });

 setEditingId(null);
```

}catch(err){

```
 ui.showError(err.message);
```

}

}

function editUser(user){

setEditingId(user.id);

setForm({
name:user.name,
email:user.email
});

}

async function removeUser(id){

const ok=
confirm("Delete user ?");

if(!ok) return;

try{

```
 await api.deleteUser(id);

 setUsers(
   users.filter(
    u=>u.id!==id
   )
 );

 ui.showSuccess("Deleted");
```

}catch(err){

```
 ui.showError(err.message);
```

}

}

const filtered=
users.filter(user=>

user.name
.toLowerCase()
.includes(
search.toLowerCase()
)

||

user.email
.toLowerCase()
.includes(
search.toLowerCase()
)

);

return(

  <div className="container">

   <h1>User Directory</h1>

<input
placeholder="Search..."
value={search}
onChange={(e)=>
setSearch(e.target.value)
}
/>

   <div className="form">

```
<input
 placeholder="Name"
 value={form.name}
 onChange={(e)=>
  setForm({
   ...form,
   name:e.target.value
  })
 }
/>

<input
 placeholder="Email"
 value={form.email}
 onChange={(e)=>
  setForm({
   ...form,
   email:e.target.value
  })
 }
/>

<button
  onClick={handleSubmit}
>

  {editingId
  ?"Update"
  :"Create"}

</button>
```

   </div>

{loading ? (

```
<div>

  <div className="skeleton"></div>
  <div className="skeleton"></div>
  <div className="skeleton"></div>

</div>
```

):(

```
<div className="grid">

 {filtered.map(user=>(

  <div
   className="card"
   key={user.id}
  >

   <h3>{user.name}</h3>

   <p>{user.email}</p>

   <button
    onClick={()=>
     editUser(user)
    }
   >
     Edit
   </button>

   <button
    onClick={()=>
     removeUser(
      user.id
     )
    }
   >
     Delete
   </button>

  </div>

 ))}

</div>
```

)}

  </div>

);

}

export default App;
