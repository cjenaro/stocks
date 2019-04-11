<template>
    <div class="main">
        <div id="stocksModal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="message">
                    <h1 class="modal-message"> {{ modalMsg }} </h1>
                    <button @click="closeModal" class="button is-info">Ok</button>
                </div>
            </div>
            <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
        </div>
        <div class="stock" v-for="stock in stocks">
            <app-stock @buyevent="buyStock(stock, $event)" :name="stock.name" :price="stock.price"></app-stock>
        </div>
    </div>
</template>

<script>
import Stock from '@/components/Stock.vue';

export default {
    data() {
        return {
            modalMsg: 'Insufficient funds',
            stocks: this.$store.state.stocks
        }
    },
    components: {
        appStock: Stock,
    },
    methods: {
        buyStock(stock, e) {            
            if (!isNaN(e)) {
                if (this.$store.state.funds > e*stock.price) {
                    stock.owned += parseInt(e, 10);
                    this.$store.state.funds -= e*stock.price; 
                } else {
                    this.modalMsg = 'Insufficient funds';
                    document.getElementById('stocksModal').className += ' is-active';
                }      
            } else {
                this.modalMsg = 'Please enter a number';
                document.getElementsByClassName('stocksModal').className += ' is-active';
            }
        },
        closeModal() {
            document.getElementById('stocksModal').className = 'modal';
        }        
    }
}
</script>

<style>
.main {
    display: flex;
    margin: 20px;
    border: thin solid lightgray;
    border-radius: 5px;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.message {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 2rem;
}

.modal-message {
    padding-bottom: 1em;
}

.stock {
    flex-shrink: 0;
    width: 45%;
    margin: 10px;
}
</style>
