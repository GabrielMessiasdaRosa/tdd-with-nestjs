import { v4 as uuid } from 'uuid';
import { Tweet } from './tweet.entity';
describe('TweetEntity', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      id: uuid(),
      content: 'Hello world',
      screen_name: 'John Doe',
    });

    expect(tweet).toBeInstanceOf(Tweet);
    expect(tweet.id).toBeDefined();
    expect(tweet.content).toEqual('Hello world');
    expect(tweet.screen_name).toEqual('John Doe');
  });
});
