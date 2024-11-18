<template>
    <div>
        <section>
            FILTER
        </section>
        <section>
            <div class="controls">
                <button>Refresh</button> 
                <router-link to="/register">Register as a coach</router-link> 

            </div>
            <ul v-if="hasCoaches"> 
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{  coach.firstName }}
            </li>
        </ul>
        <h3 v-else>No coaches found.</h3>
        </section>
    </div>
</template>

<script>
export default{
    computed:{
        filteredCoaches(){
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches(){
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>