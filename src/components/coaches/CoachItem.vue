<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>$ {{rate}} /hour</h4>
        <div>
            <span v-for="area in areas" :key="area"> {{ area }}</span>
        </div>
        <div class="actions">
            <router-link :to="coachContactLink"> Contact </router-link>
            <router-link :to="coachDetailsLink"> View Details </router-link>
        </div>
    </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;  // Added space between first and last name
        },
        coachContactLink() {
            return '/coaches/' + this.id + '/contact';
        },
        coachDetailsLink() {
            return '/coaches/' + this.id;
        }
    }
}
</script>
