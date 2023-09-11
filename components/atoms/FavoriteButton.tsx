import React, { useContext } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { HeartIcon } from "../icons";
import clsx from "clsx";
import { FavoriteContext } from "@/context/FavoriteContext";

interface FavoriteButtonProps {
  id: number;
}

export default function FavoriteButton({ id }: FavoriteButtonProps) {
  const { favorite, handleFavorite } = useContext(FavoriteContext);
  return (
    <Tooltip
      content={
        favorite.find((x: any) => x === id) ? "Hapus favorit" : "Tambah favorit"
      }
      size="sm"
      delay={0}
      closeDelay={0}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: "easeIn",
            },
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          },
        },
      }}
    >
      <Button
        onPress={() => handleFavorite(id)}
        className="min-w-unit-7 w-unit-7 h-unit-7"
        isIconOnly
        variant="light"
        size="sm"
      >
        <HeartIcon
          size={16}
          className={clsx(
            favorite.find((x: any) => x === id) && "fill-default-500",
            "stroke-default-500"
          )}
        />
      </Button>
    </Tooltip>
  );
}
