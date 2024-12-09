<template>
    <base-card>
    <h2>Find Your Coach</h2>
    <span cass="filter-option">
        <input type="checkbox" id="frontend" checked @change="setFilter">
        <label for="frontend">Frontend</label>
    </span>
    <span cass="filter-option">
        <input type="checkbox" id="backend" checked @change="setFilter">
        <label for="backend">Backend</label>
    </span>
    <span cass="filter-option">
        <input type="checkbox" id="career" checked @change="setFilter">
        <label for="career">Career</label>
    </span>
    </base-card>
</template>

<script>
export default{
    emits:['change-filter'],
    data(){
        return{
            filters:{ 
                frontend: true,
                backend: true,
                career: true
            }
        };
    },
    methods:{
        setFilter(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters, 
                [inputId]: isActive
            };
            this.filters=updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
  color: #3f3e3e;
  margin-bottom: 1rem;
}

.filter-option {
  display: inline-block;
  margin-right: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  position: relative; /* To position the custom checkbox */
}

.filter-option input {
  /* Hide the default checkbox entirely */
  display: none;
}

.filter-option label {
  padding: 0.5rem 1rem;
  border: 2px solid #D4AF37;
  border-radius: 12px;
  background-color: #F8F1EB;
  color: #D4AF37;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.filter-option label::before {
  content: ''; /* Empty content for the custom checkbox */
  width: 16px;
  height: 16px;
  border: 2px solid #D4AF37;
  border-radius: 50%;
  background-color: #F8F1EB;
  margin-right: 8px;
  transition: all 0.3s ease;
  position: absolute;
}

.filter-option input:checked + label::before {
  background-color: #D4AF37; /* Green when checked */
  border-color: #D4AF37;
}

.filter-option input:checked + label {
  background-color: #D4AF37; /* Green when checked */
  color: #FFFFFF;
}

/* Ensure that when checked, no blue background appears */
.filter-option input:checked + label::after {
  content: '\2713'; /* Unicode for checkmark */
  position: absolute;
  font-size: 14px;
  color: white; /* Checkmark color */
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
}

input[type="checkbox"] {
accent-color: #006B6B;
}
</style>
