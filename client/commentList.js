Template.commentList.helpers({
    comments: function() {
        return Comments.find({}, { sort: { dateCreated: -1 }}).fetch();
    }
});