import { getDictionary } from "@/app/[lang]/dictionaries";
import { ContactContent } from "@/components/sections/contact/contact-content";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <ContactContent dictionary={dictionary.contact} />;
}
