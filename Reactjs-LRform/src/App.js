//import logo from './logo.svg';
//import './App.css';
//reacjs logo...
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

//printing paragraph...
/*
import React from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: true };  
      }  
      render() {  
          const mango = this.state.myinfo ? (  
              <div>  
                  <p><h3>used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.</h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome to Mango city </h1>  
                      { mango }   
                  </div>  
              );  
     }  
}  
export default App; 
*/

//toggle button....
/*
import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: false };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to Mango city</h1>  
                  {  
                      this.state.myinfo ? (   
                          <div>  
                              <h1>Login</h1>
                              <form>
                              <div>
                              <label>Email</label>
                              <input type="email"/>
                              </div>
                              <div>
                              <label>Password</label>
                              <input type="password"/>
                              </div>
                              </form>
                              <button onClick={this.togglemyBio}>CLOSE LOGIN FORM </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}>SHOW LOGIN FORM</button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;
*/

//paragraph...with...using...props...
/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Mangos are imported from { this.props.name } </h1>    
            <p> <h4> Welcome to Mango city </h4> </p>          
          </div>  
      );  
   }  
}  
export default App;  
*/


//props using defaultprops
/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Thats the property </h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Mango city are guntur or salem?</p>          
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "Salem"  
}  
export default App;
*/

//method accessing using event handling & bind method
/*
import React from 'react';  
class App extends React.Component {  
  constructor() {  
      super();  
      this.state = {age: '100'};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({age: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfullys: ' + this.state.age);  
      //event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Chalapathi staff control forms</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.age} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App;
*/


//using cookie parser handling cookies
/*
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(4000);
*/


/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pagenation/Login';
import Register from './Pagenation/Register';
import TableWithPagination from './Pagenation/Table';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" Pagenation={Login} />
        <Route path="/register" pagenation={Register} />
        <Route path="/table" pagenation={TableWithPagination} />
      </Switch>
    </Router>
  );
}

export default App;
*/


import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './Services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [currentItem, setCurrentItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });


  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({ name: newItem });
    setItems([...items, response.data]);
    setNewItem({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, { name: item.name });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input 
        type="number"
        value={newItem.empid}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <input 
        type="text"
        value={newItem.username}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      
      <input 
        type="number"
        value={newItem.age}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      
      <input 
        type="email"
        value={newItem.email}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <input 
        type="address"
        value={newItem.address}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <input 
        type="salary"
        value={newItem.salary}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add</button>
      <br/>
      <table border="10" style={{  borderColor: 'blue',
          borderStyle: 'solid',
          borderWidth: '2px',
          backgroundColor: 'lightgreen' }}>
      <thead>
          <tr>
            <th>Empid</th>
            <th>Username</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <>
          {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <input
                type="number"
                value={item.empid}
                onChange={(e) =>
                  setItems(items.map((i) => (i._id === item._id ? { ...i, name: e.target.value } : i)))
                }
              />
              {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <input
                type="text"
                value={item.username}
                onChange={(e) =>
                  setItems(items.map((i) => (i._id === item._id ? { ...i, name: e.target.value } : i)))
                }
              />
              {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <input
                type="string"
                value={item.email}
                onChange={(e) =>
                  setItems(items.map((i) => (i._id === item._id ? { ...i, name: e.target.value } : i)))
                }
              />
              {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <input
                type="string"
                value={item.address}
                onChange={(e) =>
                  setItems(items.map((i) => (i._id === item._id ? { ...i, name: e.target.value } : i)))
                }
              />
              {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <input
                type="number"
                value={item.salary}
                onChange={(e) =>
                  setItems(items.map((i) => (i._id === item._id ? { ...i, name: e.target.value } : i)))
                }
              />
              </>
              ) : (
                <>
                  <td>{item.empid}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.salary}</td>
                  <td>
                    <button onClick={() => { setEditingItem(item._id); setCurrentItem(item); }}>Edit</button>
                    <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;



/*
// client/src/App.js
import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './Services/itemServices';
const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [currentItem, setCurrentItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddItem = async () => {
    
      const response = await addItem(newItem);
      setItems([...items, response.data]);
      setNewItem({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
 
  };

  const handleUpdateItem = async (id) => {
    try {
      const response = await updateItem(id, currentItem);
      setItems(items.map(item => (item._id === id ? response.data : item)));
      setEditingItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: value
    }));
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <h2>Add New Item</h2>
      <input
        type="number"
        name="empid"
        value={newItem.empid}
        onChange={handleChange}
        placeholder="Enter empid"
      />
      <input
        type="text"
        name="username"
        value={newItem.username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <input
        type="number"
        name="age"
        value={newItem.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <input
        type="email"
        name="email"
        value={newItem.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        type="text"
        name="address"
        value={newItem.address}
        onChange={handleChange}
        placeholder="Enter address"
      />
      <input
        type="number"
        name="salary"
        value={newItem.salary}
        onChange={handleChange}
        placeholder="Enter salary"
      />
      <button onClick={handleAddItem}>Add</button>

      <h2>Items List</h2>
<table border="10" style={{  borderColor: 'blue',
          borderStyle: 'solid',
          borderWidth: '2px',
          backgroundColor: 'lightgreen' }}>
        <thead>
          <tr>
            <th>Empid</th>
            <th>Username</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item._id}>
              {editingItem === item._id ? (
                <>
                  <td><input type="number" name="empid" value={currentItem.empid} onChange={handleEditChange} /></td>
                  <td><input type="text" name="username" value={currentItem.username} onChange={handleEditChange} /></td>
                  <td><input type="number" name="age" value={currentItem.age} onChange={handleEditChange} /></td>
                  <td><input type="email" name="email" value={currentItem.email} onChange={handleEditChange} /></td>
                  <td><input type="text" name="address" value={currentItem.address} onChange={handleEditChange} /></td>
                  <td><input type="number" name="salary" value={currentItem.salary} onChange={handleEditChange} /></td>
                  <td>
                    <button onClick={() => handleUpdateItem(item._id)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.empid}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.salary}</td>
                  <td>
                    <button onClick={() => { setEditingItem(item._id); setCurrentItem(item); }}>Edit</button>
                    <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
*/