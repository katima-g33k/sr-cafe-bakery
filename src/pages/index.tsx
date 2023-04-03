import React from "react";
import { useTranslation } from "react-i18next";
import { RootLayout } from "@/components/Layouts";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <RootLayout pageTitle="Secret Recipe Cafe & Bakery">
      <div>{t("home.title")}</div>
    </RootLayout>
  );
}
