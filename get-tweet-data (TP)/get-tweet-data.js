// Please do not change the name of this function
class GetTweetData {
  constructor (tweet){
    this.tweet = tweet
  }

  returnTweetLength(){
    if(!this.tweet){return "There\'s no words in this tweet!"}

    // splitting tweet into an array of words
  const tweetWordsArr = this.tweet.split(' ');
  return tweetWordsArr.length
    
  }

  returnHashtags(){
    if(!this.tweet){return "There\'s no tweet here!"}
    // matches all hastagged words
    let matchTags = this.tweet.match(/(?<=[\s>]|^)#(\w*[A-Za-z_]+\w*)/g)
    if(!matchTags){ matchTags = [], console.log("No #hashtags in this tweet")}
    return matchTags
    }
  
  returnMentions(){
    if(!this.tweet){return "There\'s no tweet here!"}
    // matches all hastagged words
    let matchMentions = this.tweet.match(/(?<=[\s>]|^)@(\w*[A-Za-z_]+\w*)/g)
    if(!matchMentions){ matchMentions = [], console.log("There\'s No @mentions in this tweet")}
    return matchMentions
  }

  returnUniqueTags(){
    const matchTags = this.returnHashtags()

    console.log(matchTags, matchTags.length, "<<<<<<<<<<<<<")
    if(!Array.isArray(matchTags)){return []}
    let uniqueTags = [...matchTags.sort()]
    uniqueTags.forEach((taggedWord, indexOfWord) => {if (taggedWord === uniqueTags[(indexOfWord)-1]) {uniqueTags.splice(indexOfWord, 1)}
    })

if (uniqueTags.length >0){
      return uniqueTags.length
} else {return []}
 
  }

  allData(){
  return {tags: this.returnHashtags(), length: this.returnTweetLength(), mentions: this.returnMentions(), uniqueTags: this.returnUniqueTags()}
  }
};

module.exports = GetTweetData;

// 1. Need to test for allData()....
// 2. Need to duplicate and out into a new folder
// 3. Need to call twitter API to retrieve @Shapeyourplanets tweets
// 4. Need to post a tweet via the API
// 5. Need to call the gpt-3 api with a prompt
// 6. Need to post that tweet to @shapeourplanet
// 7. Need to set up a way for this to happen every day

