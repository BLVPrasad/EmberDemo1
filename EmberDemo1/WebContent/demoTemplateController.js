App.DemoTemplateController = Ember.ObjectController.extend({
	booleanValue : true,
	toggle : function(){
		this.set("booleanValue", !this.get("booleanValue"));
	}
})