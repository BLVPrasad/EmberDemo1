App = Ember.Application.create();

 	   App.Router.map(function(){
			this.resource("about",function(){
				this.route("team");
			});
			this.route("contact");
			this.resource("bookmarks");
 	   })