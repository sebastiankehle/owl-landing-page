import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  console.log(dictionary);
  return <>{/* <BlogHero dictionary={dictionary} /> */}</>;
}
