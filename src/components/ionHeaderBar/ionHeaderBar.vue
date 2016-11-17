<template>
    <div class="bar bar-header">
        <slot></slot>
    </div>
</template>
<script>
    let defaultClazz=`bar bar-header`;
    export default {
        props: {
            class: String
        },
        computed: {
            computedClass(){
                return `${defaultClazz} ${this.class}`;
            }
        }

    }
</script>
