<template>
    <div>
        <template v-for="(item, index) in data">

        </template>
    </div>
</template>

<script>
import item from './item.vue'

export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    components: {
        item,
    },
}
</script>

<style scoped lang="less">

</style>
