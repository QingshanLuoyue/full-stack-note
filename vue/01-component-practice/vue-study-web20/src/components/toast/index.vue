<template>
    <div class="toast-box">
        <div class="toast-content">{{ msg }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '',
                duration:  3000,
                visible: true
            }
        },
        methods: {
            show() {
                this.visible = true
                setTimeout(() => {
                    this.hide()
                }, this.duration)
            },
            hide() {
                this.visible = false
                this.remove()
            }
        }
    }
</script>

<style scoped>
.toast-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    min-height: 20px;
    max-width: 100px;
    color: #fff;
}
.toast-content {
    padding: 3px 5px;
    background: rgba(000, 000, 000, 0.8);
}
</style>