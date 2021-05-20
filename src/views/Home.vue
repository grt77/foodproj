<template>
  <div v-if="getLoginData === true ">
    <Header />
    <h3>Restruant Details</h3>
    <div class="flex">
      <div v-for="(rest,index) in getRestDetails" :key="index">
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{rest.type}}
        </div>
        <v-list-item-title class="headline mb-1">
          {{rest.name}}
        </v-list-item-title>
        <v-rating
          :value=rest.rating
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <v-list-item-subtitle>{{rest.description}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      <v-img
          class="white--text align-end"
          height="400px"
          width="400px"
          src="../assets/food.jpg"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-dialog
      v-model="dialog"
      width="500"
      :retain-focus="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          @click ="additems(rest)"
        >
          Buy Here
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{restName}} Food items  List
        </v-card-title>

        <v-card-text>
          <div v-for="(item,index) in userItems" :key="index" >
            <br>
            <div class="flexItems">
              <div>
           <b>{{item[0]}}</b> </div>
           <div><strong>RS:{{item[1]}}</strong></div>
           <div>
             <v-btn
      fab
      small
      color="primary"
      @click ="decriment(index)"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
          {{item[2]}}
           <v-btn
      fab
      small
      color="primary"
      @click="incriment(index)"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
           </v-btn>
          </div>
            </div>
          </div>
         </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="addToCart"
          >
            AddToCart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card-actions>
  </v-card>
      </div>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  data() {
    return {
      dialog: false,
      userItems: [],
      restName: '',
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['getLoginData']),
    ...mapGetters(['getRestDetails']),
    ...mapGetters(['getUserItems']),
  },
  methods: {
    ...mapActions(['setUserItemsAction']),
    additems(rest) {
      this.userItems = [];
      const fooditems = Object.keys(rest.items);
      const values = Object.values(rest.items);
      this.restName = rest.name;
      for (let i = 0; i < fooditems.length; i += 1) {
        const dup = [];
        dup[0] = fooditems[i];
        dup[1] = values[i];
        dup[2] = 0;
        this.userItems.push(dup);
      }
    },
    decriment(index) {
      if (this.userItems[index][2] > 0) {
        this.userItems[index][2] -= 1;
      }
      this.userItems.push([]);
      this.userItems.pop();
    },
    incriment(index) {
      this.userItems[index][2] += 1;
      this.userItems.push([]);
      this.userItems.pop();
    },
    addToCart() {
      this.setUserItemsAction(this.userItems);
      this.dialog = false;
      this.$router.push('/mycart');
    },
  },
};
</script>
<style scoped lang="scss">
.flex{
  margin-top:50px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  gap:30px;
}
h3{
  text-align: center;
  margin-top:20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
}
.flexItems{
  display: flex;
  justify-content: space-between;
  width:300px;
}
</style>
