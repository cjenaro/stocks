<template>
  <div id="app">
    <div id="appModal" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="message">
                <h1 class="modal-message"> {{ modalMsg }} </h1>
                <button v-if="endDayState" @click="endDay" class="button is-info">Yes</button>
                <button v-if="saveState" @click="save" class="button is-info">Yes</button>
                <button v-if="loadState" @click="load" class="button is-info">Yes</button>
                <button @click="closeModal" class="button is-info">No</button>
            </div>
        </div>
        <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
    </div>
    <div class="space"></div>
    <div id="nav">
      <div class="left">
        <router-link class="pad" to="/">Stock Trader</router-link>
        <router-link class="pad" to="/portfolio">Portfolio</router-link>
        <router-link class="pad" to="/stocks">Stocks</router-link>
      </div>
      <div class="right">
        <h1 @click="showEndDayModal" class="pad">End day</h1>
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <h1 class="pad" aria-haspopup="true" aria-controls="dropdown-menu">
              Save & Load
            </h1>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <h1 @click="showSaveModal" class="pad">Save state</h1>
              </div>
              <div class="dropdown-item">
                <h1 @click="showLoadModal" class="pad">Load state</h1>
              </div>
            </div>
          </div>
        </div>
        <h1 id="funds" class="pad">Funds: {{ getf }}</h1>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-left',
      modalMsg: '',
      saveState: false,
      loadState: false,
      endDayState: false
    }
  },
  methods: {
    showEndDayModal: function() {
      this.modalMsg = 'Are you done for today?';
      this.endDayState = true;
      document.getElementById('appModal').className += ' is-active';
    },
    showLoadModal: function() {
      this.modalMsg = 'Do you want to load? (You may lose your progress)';
      this.loadState = true;
      document.getElementById('appModal').className += ' is-active';
    },
    showSaveModal: function() {
      this.modalMsg = 'Do you want to save? (Overwrite other save)';
      this.saveState = true;
      document.getElementById('appModal').className += ' is-active';
    },
    save: function() {
      this.$store.state.savedStocks = [];
      this.$store.state.stocks.forEach(element => {
        this.$store.state.savedStocks.push({
          name: element.name,
          owned: element.owned,
          price: element.price
        })
      });
      this.$store.state.savedFunds = this.$store.state.funds;
      this.closeModal();
    },
    load: function() {
      this.$store.state.stocks = [];
      this.$store.state.savedStocks.forEach(element => {
        this.$store.state.stocks.push({
          name: element.name,
          owned: element.owned,
          price: element.price
        })
      });
      this.$store.state.funds = this.$store.state.savedFunds;
      this.closeModal();
    },
    endDay: function() {
      this.$store.state.stocks.map(stock => stock.price = Math.floor(Math.random()*500));
      this.closeModal();
    },
    closeModal: function() {
      document.getElementById('appModal').className = 'modal';
      this.saveState = false;
      this.loadState = false;
      this.endDayState = false;
    }
  },
  computed: {
    getf() {
      return this.$store.state.funds
    }
  },
  watch: {
  '$route' (to, from) {
    let right = false;
    if (to.path == '/') {
      right = true;
    } else {
      if (from.path == '/stocks' && to.path == '/portfolio') {
        right = true;
      }
    }
     
    this.transitionName = right ? 'slide-right' : 'slide-left'
  }
}
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 15px;
}

button {
  margin: 5px;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 182, 193, 0.3);
  padding-top: 10px;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: grey;
  font-weight: bold;
}

.left {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.right {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.pad {
  padding: 5px;
}

.space {
  padding-bottom: 15px;
}

.pad:hover {
  font-weight: bold;
}

#funds {
  font-weight: bold;
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: 1s;
}
.slide-left-enter {
  transform: translate(150%, 0);
}

.slide-left-leave-to {
  transform: translate(-150%, 0);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: 1s;
}
.slide-right-enter {
  transform: translate(-150%, 0);
}

.slide-right-leave-to {
  transform: translate(150%, 0);
}
</style>
