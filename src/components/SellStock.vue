<template>
    <div class="stock-container">
        <div class="header">
            <h1 class="name"> {{ name }} </h1>
            <h4 class="price"> &nbsp;(Price: {{ price }} | Quantity: {{ owned }}) </h4>
        </div>
        <div class="body">
            <input class="input" type="text" name="quantity" placeholder="Quantity" v-model="quantity" id="">
            <input @click="sell" class="button sell" type="button" value="Sell">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0
        }
    },
    props: ['name', 'price', 'owned'],
    methods: {
        sell() {
            this.$emit('sellevent', this.quantity);
        }
    }
}
</script>

<style scoped>
.stock-container {
    border: thin solid lightgrey;
    border-radius: 5px;
}

.header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:5px;
    border-radius: 5px 5px 0px 0px;
    background-color: #d8edf6;
    color: #37708c;
}

.body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px 15px 10px;
}

.sell {
    background-color: #e98f8d;
}

input {
    margin: 5px;
}
</style>
