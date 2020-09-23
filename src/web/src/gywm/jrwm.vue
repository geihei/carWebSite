<template>
    <div>
        <img style="width: 100%" src="./assets/jrwm-banner.png" alt="">
        <div class="style-container">
            <div class="item">
                <img src="./assets/jrwm-1.png" alt="">
                社会招聘
            </div>
            <div class="item">
                <img src="./assets/jrwm-2.png" alt="">
                校园招聘
            </div>
            <div class="item">
                <img src="./assets/jrwm-3.png" alt="">
                实习生招聘
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
.style-container {
    width: 100%;
    max-width: 1008px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 180px;
    margin-bottom: 242px;
    .item {
        text-align: center;
        font-size: 37px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #343434;
    }
    img {
        width: 136px;
        margin: 0 auto;
        margin-bottom: 27px;
    }
}
</style>
