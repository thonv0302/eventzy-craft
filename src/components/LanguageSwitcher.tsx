"use client"
import Link from 'next/link';
import { useLocale } from "next-intl";

export default function LanguageToggle() {
    const locale = useLocale(); // current locale directly
    const nextLocale = locale === "en" ? "vi" : "en";

    return (
        <Link href={`/${nextLocale}`} className="px-3 py-1 rounded bg-gray-200">
            {nextLocale.toUpperCase()} 111111111111111111
        </Link>
    );
}
