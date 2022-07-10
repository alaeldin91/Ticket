<template>
  <div class="auth-wrapper">
    <div class="container-fluid h-100">
      <div class="row flex-row h-100 bg-white">
        <div
          class="
            col-xl-8 col-lg-6 col-md-5
            p-0
            d-md-block d-lg-block d-sm-none d-none
          "
        >
          <div class="lavalite-bg">
            <div class="lavalite-overlay">
                <img src="/img/login-bg.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
          <div class="authentication-form mx-auto">
            <div class="logo-centered">
              <a href=""
                ><img src="/img/AboHanna.png" alt="" class="avatar"
              /></a>
            </div>
            <h3>  Sign In to Admin</h3>
            <p>Happy to see you again!</p>
            <form>
              <div class="form-group">
             
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  placeholder="please enter your email"
                  v-model="user.email"
                 
                />
                <i class="ik ik-user"></i>
              </div>
              <div class="form-group">
              
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="please enter your password"
                  v-model="user.password"
          
                />
                <i class="ik ik-lock"></i>
              </div>
              <div class="row">
                <div class="col text-left">
                  <label class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="item_checkbox"
                      name="item_checkbox"
                      value="option1"
                      v-model="user.rember_me"
                    />
                    <span class="custom-control-label">&nbsp;Remember Me</span>
                  </label>
                </div>
              
              </div>
              <div class="sign-btn text-center">
                <button type="submit" class="btn btn-primary btn-sm ml-auto">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    data(){
      return{
        user:{
          email:'',
          password: '',
          rember_me:''

        }

      }
    }

 
};
</script>

<style>
h3 {
    text-align: center;
}
p {
    text-align: center;
}
</style>