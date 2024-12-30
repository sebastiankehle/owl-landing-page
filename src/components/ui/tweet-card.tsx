"use client";

import { Tweet, TweetProps, useTweet } from "react-tweet";
import { cn } from "@/lib/utils";

export function TweetSkeleton({
  className,
  ...props
}: {
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div
      className={cn(
        "flex size-full max-h-max min-w-72 flex-col gap-2 rounded-lg border p-4",
        className,
      )}
      {...props}
    >
      <div className="flex flex-row gap-2">
        <div className="size-10 shrink-0 animate-pulse rounded-full bg-muted" />
        <div className="h-10 w-full animate-pulse bg-muted" />
      </div>
      <div className="h-20 w-full animate-pulse bg-muted" />
    </div>
  );
}

export function TweetNotFound({
  className,
  ...props
}: {
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center gap-2 rounded-lg border p-4",
        className,
      )}
      {...props}
    >
      <h3>Tweet not found</h3>
    </div>
  );
}

export function ClientTweetCard({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: TweetProps & { className?: string }) {
  const { data, error, isLoading } = useTweet(id, apiUrl, {
    ...fetchOptions,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
    },
  });

  if (isLoading) return fallback;
  if (error || !data) {
    return <TweetNotFound error={onError ? onError(error) : error} />;
  }

  return (
    <div
      className={cn(
        "relative flex size-full max-w-lg flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md",
        props.className,
      )}
    >
      <Tweet id={id} apiUrl={apiUrl} components={components} />
    </div>
  );
}
