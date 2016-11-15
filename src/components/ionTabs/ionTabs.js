Vue.component('ion-tabs', {
    props: {
        tabPosition: String,
        tabStyle: String
    },
    data: function () {
        return {}
    },
    methods: {},

    created: function () {
        console.log('tabs create')
    },
    beforeMount: function () {

    },
    mounted: function () {

        console.log('tabs mounted!');
    },
    render: function (h) {
        console.log('tabs render')
        return (
            <div class="tabs-positive tabs-icon-top tabs-standard">
                <div class="tab-nav tabs">
                    { this.$slots.default}
                </div>
            </div>
        )
    }
});