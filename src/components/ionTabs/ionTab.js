import tabMixin from './tabMixin';
Vue.component('ion-tab', {
    mixins:[tabMixin],
    props: {
        title: String,
        icon: String,
        iconOn: String,
        iconOff: String,
        badge: String,
        badgeStyle: String
    },
    created:function () {
        debugger;
    },
    template: `<a  class="tab-item">
                      <i :class="'icon '+icon" v-if="icon"></i>
                      <span class="tab-title">{{title}}</span>
               </a>`
});