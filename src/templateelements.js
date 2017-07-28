(function(exports){

    class TemplateElement extends CustomElements.CustomElement{
        constructor(template){
            super();
            this.shadowRoot.appendChild(document.currentScript.ownerDocument.getElementById(template).content.cloneNode(true));
        }
    }

    exports.TemplateElement = TemplateElement;

})(typeof exports === 'undefined'? this['TemplateElements']={}: exports);
