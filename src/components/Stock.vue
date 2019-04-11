<template>
    <div class="stock-container">
        <div class="header">
            <h1 class="name"> {{ name }} </h1>
            <h4 class="price"> &nbsp;(Price: {{ price }}) </h4>
        </div>
        <div class="body">
            <input class="input" type="text" name="quantity" placeholder="Quantity" v-model="quantity" id="">
            <input @click="buy" class="button is-primary" type="button" value="Buy">
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
    props: ['name', 'price'],
    methods: {
        buy() {
            this.$emit('buyevent', this.quantity);
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
    background-color: #def0d8;
    color: #5d7854;
}

.body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px 15px 10px;

}

input {
    margin: 5px;
}
</style>
