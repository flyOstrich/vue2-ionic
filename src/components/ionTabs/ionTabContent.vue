<template>
    <span class="pane tab-content" :nav-view="active?'active':'cached'"><slot></slot></span>
</template>

<script>
    export default{
        props:{
           for:String
        },
        data(){
           return {
               active:false
           }
        },
        computed:{
            active(){
                return this.$parent.activeTabId==this.for;
            }
        },
        created(){
//           alert(this.for)
        }
    }




</script>
