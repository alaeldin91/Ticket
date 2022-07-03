<template>
<div class="wrapper">
<Headers/>

<div class="page-wrap">
<div class="main-content">
<router-view>  </router-view>
</div>
</div>
<Footers />
</div>



  
</template>

<script>
    import Headers from './../include/headers'
    import Footers from './../include/footers.vue'


export default {
components:{
    Headers,
Footers

    }

}
</script>

<style>

</style>