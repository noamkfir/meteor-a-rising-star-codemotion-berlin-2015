Template.commentForm.events({
    'submit form': function(e, template) {
        e.preventDefault();

        let content = template.$('#content').val();

        Comments.insert({
            content,
            dateCreated: new Date()
        });
    }
});