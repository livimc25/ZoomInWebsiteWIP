import Component from '@glimmer/component';

export default Component.extend ({
    actions: {
        zoomIn() {
            var myImg = document.getElementById("bgimage")
            var currWidth = myImg.clientWidth;
            myImg.style.width = (currWidth + 100) + "px";
        }
    }
    // @tracked isLarge = false;
    // @action toggleSize() {
    //     this.isLarge = !this.isLarge;
})


