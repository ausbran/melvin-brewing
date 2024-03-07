/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.9.0 (Jan, 2018)

  Copyright (c) 2012-2018 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/
!function(e){if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){var t=require("jquery");module.exports=e(t)}else e(window.jQuery||window.Zepto||window.$)}((function(e){"use strict";e.fn.serializeJSON=function(t){var n,a,s,i,r,o,l,d,u,c,p,f,h;return n=e.serializeJSON,a=this,s=n.setupOpts(t),i=a.serializeArray(),n.readCheckboxUncheckedValues(i,s,a),r={},e.each(i,(function(e,t){o=t.name,l=t.value,u=n.extractTypeAndNameWithNoType(o),c=u.nameWithNoType,(p=u.type)||(p=n.attrFromInputWithName(a,o,"data-value-type")),n.validateType(o,p,s),"skip"!==p&&(f=n.splitInputNameIntoKeysArray(c),d=n.parseValue(l,o,p,s),(h=!d&&n.shouldSkipFalsy(a,o,c,p,s))||n.deepSet(r,f,d,s))})),r},e.serializeJSON={defaultOptions:{checkboxUncheckedValue:void 0,parseNumbers:!1,parseBooleans:!1,parseNulls:!1,parseAll:!1,parseWithFunction:null,skipFalsyValuesForTypes:[],skipFalsyValuesForFields:[],customTypes:{},defaultTypes:{string:function(e){return String(e)},number:function(e){return Number(e)},boolean:function(e){return-1===["false","null","undefined","","0"].indexOf(e)},null:function(e){return-1===["false","null","undefined","","0"].indexOf(e)?e:null},array:function(e){return JSON.parse(e)},object:function(e){return JSON.parse(e)},auto:function(t){return e.serializeJSON.parseValue(t,null,null,{parseNumbers:!0,parseBooleans:!0,parseNulls:!0})},skip:null},useIntKeysAsArrayIndex:!1},setupOpts:function(t){var n,a,s,i,r,o;for(n in o=e.serializeJSON,null==t&&(t={}),s=o.defaultOptions||{},a=["checkboxUncheckedValue","parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","skipFalsyValuesForTypes","skipFalsyValuesForFields","customTypes","defaultTypes","useIntKeysAsArrayIndex"],t)if(-1===a.indexOf(n))throw new Error("serializeJSON ERROR: invalid option '"+n+"'. Please use one of "+a.join(", "));return i=function(e){return!1!==t[e]&&""!==t[e]&&(t[e]||s[e])},r=i("parseAll"),{checkboxUncheckedValue:i("checkboxUncheckedValue"),parseNumbers:r||i("parseNumbers"),parseBooleans:r||i("parseBooleans"),parseNulls:r||i("parseNulls"),parseWithFunction:i("parseWithFunction"),skipFalsyValuesForTypes:i("skipFalsyValuesForTypes"),skipFalsyValuesForFields:i("skipFalsyValuesForFields"),typeFunctions:e.extend({},i("defaultTypes"),i("customTypes")),useIntKeysAsArrayIndex:i("useIntKeysAsArrayIndex")}},parseValue:function(t,n,a,s){var i,r;return i=e.serializeJSON,r=t,s.typeFunctions&&a&&s.typeFunctions[a]?r=s.typeFunctions[a](t):s.parseNumbers&&i.isNumeric(t)?r=Number(t):!s.parseBooleans||"true"!==t&&"false"!==t?s.parseNulls&&"null"==t?r=null:s.typeFunctions&&s.typeFunctions.string&&(r=s.typeFunctions.string(t)):r="true"===t,s.parseWithFunction&&!a&&(r=s.parseWithFunction(r,n)),r},isObject:function(e){return e===Object(e)},isUndefined:function(e){return void 0===e},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},optionKeys:function(e){if(Object.keys)return Object.keys(e);var t,n=[];for(t in e)n.push(t);return n},readCheckboxUncheckedValues:function(t,n,a){var s,i,r;null==n&&(n={}),e.serializeJSON,s="input[type=checkbox][name]:not(:checked):not([disabled])",a.find(s).add(a.filter(s)).each((function(a,s){if(i=e(s),null==(r=i.attr("data-unchecked-value"))&&(r=n.checkboxUncheckedValue),null!=r){if(s.name&&-1!==s.name.indexOf("[]["))throw new Error("serializeJSON ERROR: checkbox unchecked values are not supported on nested arrays of objects like '"+s.name+"'. See https://github.com/marioizquierdo/jquery.serializeJSON/issues/67");t.push({name:s.name,value:r})}}))},extractTypeAndNameWithNoType:function(e){var t;return(t=e.match(/(.*):([^:]+)$/))?{nameWithNoType:t[1],type:t[2]}:{nameWithNoType:e,type:null}},shouldSkipFalsy:function(t,n,a,s,i){var r=e.serializeJSON.attrFromInputWithName(t,n,"data-skip-falsy");if(null!=r)return"false"!==r;var o=i.skipFalsyValuesForFields;if(o&&(-1!==o.indexOf(a)||-1!==o.indexOf(n)))return!0;var l=i.skipFalsyValuesForTypes;return null==s&&(s="string"),!(!l||-1===l.indexOf(s))},attrFromInputWithName:function(e,t,n){var a,s;return s='[name="'+(a=t.replace(/(:|\.|\[|\]|\s)/g,"\\$1"))+'"]',e.find(s).add(e.filter(s)).attr(n)},validateType:function(t,n,a){var s,i;if(s=(i=e.serializeJSON).optionKeys(a?a.typeFunctions:i.defaultOptions.defaultTypes),n&&-1===s.indexOf(n))throw new Error("serializeJSON ERROR: Invalid type "+n+" found in input name '"+t+"', please use one of "+s.join(", "));return!0},splitInputNameIntoKeysArray:function(t){var n;return e.serializeJSON,n=t.split("["),""===(n=e.map(n,(function(e){return e.replace(/\]/g,"")})))[0]&&n.shift(),n},deepSet:function(t,n,a,s){var i,r,o,l,d,u;if(null==s&&(s={}),(u=e.serializeJSON).isUndefined(t))throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");if(!n||0===n.length)throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");i=n[0],1===n.length?""===i?t.push(a):t[i]=a:(r=n[1],""===i&&(d=t[l=t.length-1],i=u.isObject(d)&&(u.isUndefined(d[r])||n.length>2)?l:l+1),""===r||s.useIntKeysAsArrayIndex&&u.isValidArrayIndex(r)?!u.isUndefined(t[i])&&e.isArray(t[i])||(t[i]=[]):!u.isUndefined(t[i])&&u.isObject(t[i])||(t[i]={}),o=n.slice(1),u.deepSet(t[i],o,a,s))}}})),$(".btn-migrate").on("click",(function(e){e.preventDefault(),$('input[name="action"]').val($(this).data("action")),$("#main-form").submit()})),void 0===Craft.Navigation&&(Craft.Navigation={}),function($){Craft.setQueryParam("sort",null),Craft.Navigation.NodeIndex=Craft.BaseElementIndex.extend({elementModals:[],init:function(e,t,n){this.navId=n.navId,this.$navSidebar=$(".navigation-nodes-sidebar"),this.base(e,t,n),this.siteMenu&&this.siteMenu.$options.each((function(e,t){n.enabledSiteIds.includes($(t).data("site-id"))||$(t).remove()}));var a=$("#js-navigation-nodes-instructions");a.length&&(a=a.find(".navigation-nodes-instructions").remove()).insertBefore($("#main-content"))},afterInit:function(){Object.keys(this.sourceStates).forEach((e=>{this.sourceStates[e].order="structure"})),this.base(),this.$elements.on("click","tbody tr a.node-edit-btn",this.editNode.bind(this)),this.$navSidebar.find("form").each($.proxy((function(e,t){const n=$(t);n.hasClass("form-type-element")?n.on("submit",this.showElementModal.bind(this)):n.on("submit",this.onNodeFormSubmit.bind(this))}),this))},editNode:function(e){e.preventDefault();var t=$(e.target).parents("tr").find(".element");Craft.createElementEditor(t.data("type"),t)},showElementModal:function(e){e.preventDefault(),this.$form=$(e.target);var t=this.$form.find("button[type=submit]");this.nodeElementType=t.data("element-type"),this.nodeElementSources=t.data("sources");var n=this.nodeElementType+"__"+this.siteId,a=this.elementModals[n];a?(a.show(),a.elementIndex.view.deselectAllElements()):this.elementModals[n]=this.createModal()},createModal:function(){return Craft.createElementSelectorModal(this.nodeElementType,{defaultSiteId:this.siteId,sources:this.nodeElementSources,multiSelect:!0,onSelect:$.proxy(this,"onElementModalSelect")})},onElementModalSelect:function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n],s=this.nodeElementType+"__"+this.siteId;this.elementModals[s].$body.find('tr[data-id="'+a.id+'"]').removeClass("sel");var i=this.$form.serializeJSON();i.navId=this.navId,i.siteId=this.siteId,i.elementId=a.id,i.elementSiteId=a.siteId,i.title=a.label,i.url=a.url,t.push(i)}this.addNodes({nodes:t})},onNodeFormSubmit:function(e){e.preventDefault(),this.$form=$(e.target);var t=this.$form.serializeJSON();t.navId=this.navId,t.siteId=this.siteId,this.addNodes({nodes:[t]})},addNodes:function(e){var t=this.$form.find(".spinner"),n=this.$form.find("ul.errors"),a=this.$form.find("button[type=submit]");t.removeClass("hidden"),n.length&&n.remove(),Craft.sendActionRequest("POST","navigation/nodes/add-nodes",{data:e}).then((e=>{Craft.cp.displayNotice(e.data.message);var t=this.$form.find('[name="parentId"').val();this.updateElements(),this.$form[0].reset(),this.$form.find('[name="parentId"').val(t)})).catch((e=>{const t=e.response;if(t&&t.data&&t.data.errors)for(var s in n=$('<ul class="errors"/>').insertBefore(a.parent()),t.data.errors)if(t.data.errors.hasOwnProperty(s))for(var i=0;i<t.data.errors[s].length;i++){var e=t.data.errors[s][i];$("<li>"+e+"</li>").appendTo(n)}t&&t.data&&t.data.message?Craft.cp.displayError(t.data.message):(console.error(e),Craft.cp.displayError())})).finally((()=>{t.addClass("hidden")}))},onUpdateElements:function(){this.updateParentSelect()},onSelectSite:function(){$(".navigation-nodes-sidebar a.tab").each((function(e,t){var n=$(t);n.attr("href",n.data("href"))}))},updateParentSelect:function(){var e={navId:this.navId,siteId:this.siteId};Craft.sendActionRequest("POST","navigation/nodes/get-parent-options",{data:e}).then((e=>{var t="";$.each(e.data.options,(function(e,n){var a=n.disabled?"disabled":"";t+='<option value="'+n.value+'" '+a+">"+n.label+"</option>"})),$(".js-parent-node select").each((function(e,n){var a=$(n).val();$(n).html(t),$(n).val(a)}))}))}}),Craft.registerElementIndexClass("verbb\\navigation\\elements\\Node",Craft.Navigation.NodeIndex),Craft.Navigation.ElementSelect=Garnish.Base.extend({init(e,t){const n=$(e),a=$(t);n.length&&setTimeout((function(){const e=n.data("elementSelect");e&&e.on("selectElements",(e=>{e.elements&&e.elements.length&&a.val(e.elements[0].siteId)}))}),100)}})}(jQuery);
//# sourceMappingURL=navigation.js.map