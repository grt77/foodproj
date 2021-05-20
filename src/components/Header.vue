<template>
  <div>
    <header>
      <h3>Gattupalli Stores</h3>
      <nav>
        <ul class="nav_links">
          <li><router-link to="/home">Home</router-link></li>
           <li><router-link to="/mycart">MyCart</router-link></li>
           <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<style scoped  lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #24252a;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
}
ul{
  list-style: none;
  li {
    display: inline-block;
    padding: 0px 20px;
    text-decoration: none;
  }
  a{
      transition: all 0.3s ease 0s;
      color: white;
  }
  a:hover{
      color:#0088a9;
  }
}
li,a{
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
}
.logo {
  height: 30px;
  width: 30px;
  cursor: pointer;
}
h3{
    color:white;
}
</style>
