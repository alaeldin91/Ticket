<template>
  <header class="header-top" header-theme="light">
    <div class="container-fluid">
      <div class="d-flex justify-content-between">
        <div class="top-menu d-flex align-items-center"></div>
        <div class="top-menu d-flex align-items-center">
          
             <div class="dropdown">
            <a
              class="dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              ><img class="avatar" src="/img/user.jpg" alt=""
            /></a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <a class="dropdown-item" href="#"
                ><i class="ik ik-user dropdown-icon"></i> Profile</a
              >
              <button class="dropdown-item" v-on:click="logoutCustomer">
                <i class="ik ik-power dropdown-icon"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Auth from './../services/auth_service';
export default {
methods:{
  logout:async  function(){
    Auth.logoutCustomer();
  }

}


};
</script>