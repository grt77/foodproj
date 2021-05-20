import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginDetails: {
      'gattupalliravi1@gmail.com': 'FGJMJLlortq@1',
      'raviteja.gattupalli@fissionlabs.com': '123456abc',
      'akhila@gmail.com': 'akhilaakhii',
    },
    userSelectedItems: [],
    restruantDetails: {
      MorningEssentails: {
        rating: 4.25,
        type: 'Brush/paste etc..',
        items: {
          Colgate_100g: 120,
          Closeup_100g: 150,
          Pepsodent_100g: 250,
        },
        name: 'MorningEssentails',
      },
      DryFruits: {
        rating: 4.5,
        type: 'cashew/kismiss etc....',
        items: {
          Cashew_250g: 170,
          Badam_250g: 190,
          kismiss_250g: 90,
          pista_250g: 250,
          cashew_1kg: 600,
        },
        name: 'DryFruits',
      },
      EatableItems: {
        rating: 4,
        type: 'Chocolates/biscuits etc...',
        items: {
          DairyMilkSilk_100g: 150,
          Unibic_biscuit: 40,
          Lays_Tomato: 30,
        },
        name: 'EatableItems',
      },
      Oils: {
        rating: 4,
        type: 'PalmOil/Sunfloweroil etc... ',
        items: {
          Ruchigold_1Lit: 180,
          Freedom_1Lit: 50,
          SRGroundnut_1Lit: 190,
        },
        name: 'Oils',
      },
      Grains: {
        rating: 3.5,
        type: 'RedGram/Blackgram etc...',
        items: {
          RedGram_1Kg: 100,
          BlackGram_1kg: 150,
          Whitegram_1kg: 180,
        },
        name: 'Grains',
      },
      Soaps: {
        rating: 3.5,
        type: 'Santoor/mysoresandle etc...',
        items: {
          Santoor_1Piece: 30,
          Santoor_set: 150,
          Mysoresandle_1p: 50,
          MysoresandleGold_1p: 80,
        },
        name: 'Soaps',
      },
      BiriyaniAssescories: {
        rating: 3.5,
        type: 'Biriyani masala etc...',
        items: {
          Biriyani_Masala_1p: 40,
          Chicken_masala_1p: 50,
        },
        name: 'BiriyaniAssescories',
      },
      Buffeplates: {
        rating: 3.5,
        type: 'BuffePlates/glasses etc...',
        items: {
          Buffeplates_30p: 25,
          Glasses_100p: 80,
          TeaGlasses_40p: 20,
        },
        name: 'Buffeplates',
      },
      RiceItems: {
        rating: 3.5,
        type: 'Rice/biriyaniRice etc...',
        items: {
          Rice_1Kg: 50,
          Rice_25kg: 1150,
          BiriyaniRice_1kg: 60,
        },
        name: 'RiceItems',
      },
      MilkMixingItems: {
        rating: 3.5,
        type: 'boost/horclis etc...',
        items: {
          Boost_500g: 250,
          Horclis_500g: 350,
          Bru_50g: 180,
        },
        name: 'MilkMixingItems',
      },
    },
    loggedin: false,
    loginid: '',
  },
  mutations: {
    setLoggedin: (state, payload) => {
      state.loggedin = payload;
    },
    setUserItems: (state, payload) => {
      state.userSelectedItems = payload;
    },
    setLoginId: (state, payload) => {
      state.loginid = payload;
    },
    setLogindetails: (state, payload) => {
      state.loginDetails = payload;
    },
  },
  actions: {
    setLoginAction: (state, payload) => {
      state.commit('setLoggedin', payload);
    },
    setUserItemsAction: (state, payload) => {
      state.commit('setUserItems', payload);
    },
    setIdAction: (state, payload) => {
      state.commit('setLoginId', payload);
    },
    setDetailsAction: (state, payload) => {
      state.commit('setLogindetails', payload);
    },
  },
  modules: {
  },
  getters: {
    getUsersData: (state) => state.loginDetails,
    getLoginData: (state) => state.loggedin,
    getRestDetails: (state) => state.restruantDetails,
    getUserItems: (state) => state.userSelectedItems,
    getLoginId: (state) => state.loginid,
  },
});
