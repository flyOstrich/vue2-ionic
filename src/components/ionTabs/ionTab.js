import tabMixin from './tabMixin';
Vue.component('ion-tab', {
    props: {
        title: String,
        icon: String,
        iconOn: String,
        iconOff: String,
        badge: String,
        badgeStyle: String
    },
    data: function () {
        return {
            active: false
        }
    },
    created: function () {
        console.log('tab create')
        if (this.$parent.$children.length == 1) {
            this.active = true;
        }
    },
    mounted: function () {
        console.log('tab mounted')
    },
    methods: {
        selectTab: function () {
            this.$parent.$children.forEach((cmp)=> {
                cmp.active = false;
            });
            this.active = true;
        }
    },
    template: `<a @click="selectTab()"  :class="active?'tab-item tab-item-active':'tab-item'">
                      <i :class="'icon '+icon" v-if="icon"></i>
                      <span class="tab-title">{{title}}</span>
               </a>`
});