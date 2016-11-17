<template>
    <div class="tabs-positive tabs-icon-top tabs-standard">
        <div class="tab-nav tabs">
            <slot name="tab-nav"></slot>
        </div>
        <slot name="nav-view"></slot>
    </div>
</template>
<script>
export  default{
    props: {
        tabPosition: String,
        tabStyle: String
    },
    data(){
        return {
           activeTabId:null
        }
    },
    created () {
        console.log('tabs create')
    },
    beforeMount () {

    },
    mounted () {
        if(this.$children.length){
            debugger;
        }
    }
}




</script>