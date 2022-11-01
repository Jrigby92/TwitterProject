
const GetTweetData = require('../get-tweet-data.js');

describe('returns an object containing data from a given tweet', () => {
  describe('returning tags from a tweet', () => {
    

    test("return a message when passed an empty string", () => {
      const getTweetData = new GetTweetData('');
      expect(getTweetData.returnHashtags()).toBe('There\'s no tweet here!')
    })
  
    test("returns an array value of all hashtagged words in a tweet to a key value pair object", () => {
      const getTweetData = new GetTweetData('#This #is my #tweet');
      expect(getTweetData.returnHashtags()).toEqual(["#This", "#is", "#tweet"])
    })
  
    test("returns an empty array value to a key value pair when there are no hashtagged words in a tweet", () => {
      const getTweetData = new GetTweetData('This is my tweet');
      expect(getTweetData.returnHashtags('This is my tweet')).toEqual([], );
    })
    
  });

  describe('the length of a tweet in words', () => {
    it('return a message when passed an empty string/ tweet', () => {
      const getTweetData = new GetTweetData('');
      expect(getTweetData.returnTweetLength()).toBe("There's no words in this tweet!")

    });

    it('return the length of a string', () => {
      const getTweetData = new GetTweetData('Theres\'s 6 words* in this tweet');
      expect(getTweetData.returnTweetLength()).toBe(6)

    });

    describe('Return the amount of mentions in a tweet', () => {
      it('return 0 mentions if no mentions are in the tweet', () => {
        const getTweetData = new GetTweetData('return 0 mentions if no mentions are in the tweet');
        expect(getTweetData.returnMentions()).toEqual([], 'There\'s no mentions in this tweet')

        
      });
      
      it('should ', () => {
      const getTweetData = new GetTweetData('Theres\'s 2 @mentions in #this @tweet');
      expect(getTweetData.returnMentions()).toEqual(['@mentions', '@tweet'])
      });
    });

    describe('return the number of unique hastags', () => {
      it('should return an empty array when passed a tweet with no hastags', () => {
        const getTweetData = new GetTweetData('This is my tweet tweet');
        expect(getTweetData.returnUniqueTags()).toEqual([])
        
      });

      it('Should return 3', () => {
        const getTweetData = new GetTweetData('#This #is my #tweet #tweet');
        expect(getTweetData.returnUniqueTags()).toBe(3)
      });
      });

      describe('Ensuring the allData method (function) returns all data in the form of an object', () => {
      it('Should return  an object with error messages as values when passed an empty tweet', () => {
        const getTweetData = new GetTweetData('');
        expect(getTweetData.allData()).toEqual({"length": "There\'s no words in this tweet!", "mentions": "There\'s no tweet here!", "tags": "There\'s no tweet here!", "uniqueTags": []})
      });
      it('should return all of the data in the form of an object', () => {
        
      });
        const getTweetData = new GetTweetData('#This #is @my #tweet');

      expect(getTweetData.allData()).toEqual({"length": 4, "mentions": ["@my"], "tags": ["#This", "#is", "#tweet"], "uniqueTags": 3});

        
      });
    
    
  });
    
});