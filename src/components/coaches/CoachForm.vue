<template>
    <form @submit.prevent="submitForm" :class="{invalid: !firstName.isValid}">
        <div class="form-control">
            <label for="firstname">FirstName</label>
            <input type="text" id="firstname" v-model.trim="firstName.val" @blur="clearValidity('firstName')"/>
            <p v-if="!firstName.isValid">Firstname must not be empty.</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastname">LastName</label>
            <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidity('lastName')"/>
            <p v-if="!lastName.isValid">Lastname must not be empty.</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid">Description must not be empty.</p>
        </div>
        <div class="form-control" :class="{invalid: !rate.isValid}">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')">
            <p v-if="!rate.isValid">Rate must be greater than zero.</p>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}">
            <h3>Areas of Expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="frontend"> Frontend Development</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="backend"> Backend Development</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="career"> Career Advisory</label>
            </div>
        </div>
        <p v-if="!areas.isValid">At least one expertise must be selected.</p>
        <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default{
    emits: ['save-data'],
    data(){
        return{
            firstName:{
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true},
            rate: {
                val: null,
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },
            formIsValid: true
        }
    },
    methods:{
        clearValidity(input){
            this[input].isValid = true;
        },
        validateForm(){
            this.formIsValid = true;
            if (this.firstName.val === ''){
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if (this.lastName.val === ''){
                this.lastName.isValid = false;
                this.formIsValid = false;
            }
            if (this.description.val === ''){
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if (!this.rate.val || this.rate.val < 0){
                this.rate.isValid = false;
                this.formIsValid = false;
            }
            if (this.areas.val.length === 0){
                this.areas.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm(){
            this.validateForm();

            if (!this.formIsValid){
                return;
            }
            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                desc: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val
            };

            this.$emit('save-data', formData);
        }
    }
}</script>

<style scoped>
.form-control {
  margin: 1rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 2px solid #D4AF37;
  border-radius: 16px;
  font: inherit;
  padding: 1.2rem;
  background-color: #F9F9F9;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  background-color: #FFFBE6;
  border-color: #D4AF37;
  outline: none;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

input:hover,
textarea:hover {
  background-color: #FFFFFF;
  border-color: #D4AF37;
}

.invalid input,
.invalid textarea {
  border-color: red;
  background-color: #FFE6E6;
}

.base-button {
  padding: 0.7rem 1.5rem;
  background-color: #D4AF37;
  color: white;
  border: none;
  border-radius: 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.base-button:hover {
  background-color: #B48C2D;
}
</style>
