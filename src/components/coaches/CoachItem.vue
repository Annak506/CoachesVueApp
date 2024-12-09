<template>
    <li>
        <h3> {{  fullName }}</h3>
        <h4> ${{ rate }}/hour</h4>
        <div> 
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>
        <div class="actions">
            <base-button mode="outline" link :to="coachContactLink">Contact</base-button>
            <base-button link :to="coachDetailsLink">View Details</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props:['id', 'firstName', 'lastName', 'rate', 'areas' ],
    computed:{
      fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        coachContactLink() {
            return `/coaches/${this.id}/contact`; 
        },
        coachDetailsLink() {
            return `/coaches/${this.id}`; 
        }
}}
</script>
<style scoped>
li {
  margin: 1.5rem 0;
  border: 1px solid #D4AF37;
  border-radius: 16px;
  padding: 1.5rem;
  background: linear-gradient(145deg, #F8F1EB, #FFFFFF);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

h3 {
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

h4 {
  font-size: 1.2rem;
  color: #777;
  font-family: 'Open Sans', sans-serif;
}

div {
  margin: 0.5rem 0;
}

.base-badge {
  background-color: #D4AF37;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  font-family: 'Open Sans', sans-serif;
  margin: 0 0.5rem 0.5rem 0;
  display: inline-block;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
