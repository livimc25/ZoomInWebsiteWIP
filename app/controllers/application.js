import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    
@action
    zoomIn() {
        var myImg = document.getElementById("freakingBackground")
        var currWidth = myImg.clientWidth;
        myImg.style.width = (currWidth + 100) + "px";
        this.transitionToRoute('sign-in');
    }
}

