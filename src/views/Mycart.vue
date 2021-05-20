<template>
  <div>
    <Header />
  <div class="flexbox">
       <v-card
    class="mx-auto"
    max-width="500"
  >
  <v-card-title>
      You Selected food items:
  </v-card-title>
  <v-card-text>
      <div class="flex">
          <div class="flexitem"><b>Name</b></div>
          <div class="flexitem"><b>Cost</b></div>
          <div class="flexitem"><b>No of Items</b></div>
          <div class="flexitem"><b>Cost</b></div>
      </div>
      <br>
      <div v-for="(data,index) in getUserItems" :key="index" >
          <div v-if="data[2]>0">
              <div class="flex">
              <div class="flexitem">{{data[0]}}</div>
              <div class="flexitem">{{data[1]}}</div>
              <div class="flexitem">{{data[2]}}</div>
              <div class="flexitem">{{data[3]}}/-</div>
              </div>
              <br>
          </div>
      </div>
      <div class="flexreverse">
        <div class="flexitem"><b>{{totalCost}}/-</b></div>
      <div class="flexitem"><b>Cost:</b></div>
      </div>
      <div class="flexreverse">
        <div class="flexitem"><b>+{{gstcost}}/-</b></div>
      <div class="flexitem"><b>Gst 5%:</b></div>
      </div>
       <div class="flexreverse">
        <div class="flexitem"><b>-{{discountcost}}/-</b></div>
      <div class="flexitem"><b>Discount 1%:</b></div>
      </div>
       <div class="flexreverse">
        <div class="flexitem"><b>----------</b></div>
      <div class="flexitem"><b></b></div>
      </div>
       <div class="flexreverse">
        <div class="flexitem"><b>{{totalCost+gstcost-discountcost}}/-</b></div>
      <div class="flexitem"><b>Total Cost:</b></div>
      </div>
  </v-card-text>
    </v-card>
  </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '../components/Header.vue';

export default {
  name: 'Mycart',
  components: {
    Header,
  },
  data() {
    return {
      totalCost: 0,
      gstcost: 0,
      discountcost: 0,
    };
  },
  computed: {
    ...mapGetters(['getUserItems']),
  },
  mounted() {
    this.costEstimation();
  },
  methods: {
    costEstimation() {
      for (let i = 0; i < this.getUserItems.length; i += 1) {
        this.getUserItems[i][3] = this.getUserItems[i][1] * this.getUserItems[i][2];
        this.totalCost += this.getUserItems[i][3];
      }
      this.getUserItems.push([]);
      this.getUserItems.pop();
      this.gstcost = this.totalCost * 0.05;
      this.discountcost = this.totalCost * 0.01;
    },
  },
};
</script>
<style scoped>
.flex{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.flexitem{
    width:100px;
}
.flexreverse{
    display: flex;
    flex-direction: row-reverse;
}
.flexbox{
    display: flex;
    justify-content: center;
    margin-top:100px;
}
</style>
