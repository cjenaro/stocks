<template>
    <div class="main">
        <div id="portfolioModal" class="modal">
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
            <app-stock @sellevent="sellEvent(stock, $event)" :name="stock.name" :owned="stock.owned" :price="stock.price"></app-stock>
        </div>
    </div>
</template>

<script>
import SellStock from '@/components/SellStock.vue';

export default {
    data() {
        return {
            modalMsg: '',
        }
    },
    computed: {
        stocks() {
            return this.$store.state.stocks.filter((stock) => stock.owned > 0)
        }
    },
    methods: {
        sellEvent(stock, e) {            
            if (stock.owned >= e) {
                stock.owned -= e;
                this.$store.state.funds += e*stock.price;                
            } else {
                this.modalMsg = 'You do not have enough stocks!';
                document.getElementById('portfolioModal').className += ' is-active';
            }
        },
        closeModal() {
            document.getElementById('portfolioModal').className = 'modal';
        } 
    },
    components: {
        appStock: SellStock
    }
}
</script>

<style>
    
</style> 