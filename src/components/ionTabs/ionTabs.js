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
        // console.log(this.$children.length)
        // console.log(this.$slots)
    },
    beforeMount: function () {
        console.log(this.$children.length)
        console.log(this.$slots)
    },
    mounted: function () {
        console.log(this.$slots)
    },
    render: function (h) {
        // return <div :class="'tabs-icon-top tabs-'+tabPosition+' tabs-'+tabStyle">
        //             <div class="tab-nav tabs">
        //                <slot></slot>
        //             </div>
        //        </div>
        console.log(this.$slots)
        return (
            <div class="tabs-positive tabs-icon-top tabs-standard">
                <div class="tab-nav tabs">
                    { this.$slots.default}
                </div>
            </div>
        )
    }
});