var snoowrap = require('snoowrap');
const { user, pass, client_secret } = require('./api_keys.json');

const r = new snoowrap({
    userAgent: 'discbot',
    clientId: 'g1bbyKZRmGKF1K9Ck7HDkw',
    clientSecret: client_secret,
    username: user,
    password: pass
  });
  
async function getSubredditURL(subreddit, option){
    var url = "Error";
    var randomNum;

    switch(option){
        case "h":
            return r.getSubreddit(subreddit).getHot().then( (reddit_arr) => {
                randomNum = Math.floor(Math.random() * reddit_arr.length);
                url = reddit_arr[randomNum].url
                return url
            }); 
        case "t":
            return r.getSubreddit(subreddit).getTop().then( (reddit_arr) => {
                randomNum = Math.floor(Math.random() * reddit_arr.length);
                url = reddit_arr[randomNum].url
                return url
            });         
        case "r":
            return r.getSubreddit(subreddit).getRising().then( (reddit_arr) => {
                randomNum = Math.floor(Math.random() * reddit_arr.length);
                url = reddit_arr[randomNum].url
                return url
            });   
        case "n":
            return r.getSubreddit(subreddit).getNew().then( (reddit_arr) => {
                randomNum = Math.floor(Math.random() * reddit_arr.length);
                url = reddit_arr[randomNum].url
                return url
            });
        case "c":
            return r.getSubreddit(subreddit).getControversial().then( (reddit_arr) => {
                randomNum = Math.floor(Math.random() * reddit_arr.length);
                url = reddit_arr[randomNum].url
                return url
            });
        default:
            return r.getSubreddit(subreddit).getHot().then( (reddit_arr) => {
                randomNum = Math.floor(Math.random() * reddit_arr.length);
                url = reddit_arr[randomNum].url
                return url
            }); 
}
}

module.exports = { getSubredditURL}