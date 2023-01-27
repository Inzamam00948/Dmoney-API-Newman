const newman = require('newman');

newman.run({
    collection: require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra:{
            export: './reports/report.html',
        }
    }
}, function(err) {
    if(err) {throw err;}
    console.log('collection run complete!');
});