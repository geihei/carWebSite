<template>
    <div class="wrapper">
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
}
</script>
