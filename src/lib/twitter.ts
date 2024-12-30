import { featuredTweets } from "@/config/tweets";

interface Tweet {
  id: string;
  text: string;
}

interface TwitterResponse {
  data: Tweet[];
  meta: {
    result_count: number;
    newest_id: string;
    oldest_id: string;
    next_token?: string;
  };
}

export async function getLatestTweets(count = 9) {
  if (!process.env.TWITTER_BEARER_TOKEN || !process.env.TWITTER_USER_ID) {
    console.warn("Twitter credentials not configured");
    return featuredTweets;
  }

  try {
    const response = await fetch(
      `https://api.twitter.com/2/users/${process.env.TWITTER_USER_ID}/tweets?max_results=${count}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
        next: {
          revalidate: 3600 * 24, // Cache for 24 hours
          tags: ["tweets"],
        },
      },
    );

    if (!response.ok) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`Twitter API: ${response.statusText}`);
      }
      return featuredTweets;
    }

    const data: TwitterResponse = await response.json();
    return data.data?.map((tweet) => tweet.id) || featuredTweets;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Twitter API:", error);
    }
    return featuredTweets;
  }
}
