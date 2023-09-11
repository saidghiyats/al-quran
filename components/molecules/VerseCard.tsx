"use client";
import { Verse } from "@/types";
import { Card, CardHeader } from "@nextui-org/react";

export interface VerseCardProps {
  verses: any;
}

export default function VerseCard({ verses }: VerseCardProps) {
  return (
    <>
      <Card>
        <CardHeader>{verses.verse_number}</CardHeader>
      </Card>
    </>
  );
}
