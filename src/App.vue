<template>
    <div>
    <the-header></the-header>
    <router-view></router-view>
    </div>  
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default{
    components:{
        TheHeader
    }
}
</script>

<!-- went back in time in terms of commits and now at the video
     Working on the main layout and styling -->