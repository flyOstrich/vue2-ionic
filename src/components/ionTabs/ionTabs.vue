<template>
    <div class="tabs-positive tabs-icon-top tabs-standard">
        <div class="tab-nav tabs">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export  default{
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
        console.log('before mount')
        let slots = this.$slots.default;
        slots.forEach((slot)=> {

        });
    },
    mounted: function () {
        console.log('tabs mounted!');
    }
}
</script>