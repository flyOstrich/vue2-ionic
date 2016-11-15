import tabMixin from './tabMixin';
Vue.component('ion-tabs', {
    mixins: [tabMixin],
    props: {
        tabPosition: String,
        tabStyle: String
    },
    data: function () {
        return {
            activeTab: null,
            tabs: []
        }
    },
    methods: {},
    created: function () {

    },
    template: `<div :class="'tabs-icon-top tabs-'+tabPosition+' tabs-'+tabStyle">
                    <div class="tab-nav tabs">
                       <slot></slot>
                    </div>
               </div>`
});