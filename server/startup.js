Meteor.startup(function() {
    if(Comments.find().count() === 0) {
        Comments.insert(
            {
                content: 'hello again',
                dateCreated: new Date()
            }
        );
    }
});