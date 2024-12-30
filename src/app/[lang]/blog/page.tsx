import { getDictionary } from "@/app/[lang]/dictionaries";
import { ClientTweetCard } from "@/components/ui/tweet-card";
import { ErrorCard } from "@/components/ui/error-card";
import { getLatestTweets } from "@/lib/twitter";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const tweetIds = await getLatestTweets();

  return (
    <div className="container py-32">
      <div className="mx-auto mb-32 max-w-3xl text-center">
        <h1 className="text-3xl font-medium sm:text-4xl">
          {dictionary.blog.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {dictionary.blog.subtitle}
        </p>
      </div>

      {tweetIds.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tweetIds.map((tweetId) => (
            <ClientTweetCard
              key={tweetId}
              id={tweetId}
              apiUrl={`https://api.twitter.com/2/tweets/${tweetId}`}
              className="w-full"
            />
          ))}
        </div>
      ) : (
        <ErrorCard
          title={dictionary.blog.error.title}
          description={dictionary.blog.error.description}
        />
      )}
    </div>
  );
}
