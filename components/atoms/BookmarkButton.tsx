import { Tooltip, Button, useDisclosure } from "@nextui-org/react";
import { BookmarkIcon } from "../icons";
import ModalAddBookmark from "../molecules/ModalAddBookmark";
import BookmarkFolder from "../molecules/BookmarkFolder";

export default function BookmarkButton({
  id,
  nameTransliterationId,
  number,
}: {
  id: number;
  nameTransliterationId: string;
  number: number;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onOpenChange: onOpenChangeAdd,
  } = useDisclosure();

  return (
    <>
      <Tooltip
        content="Salin info surah"
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
          onPress={onOpen}
          className="min-w-unit-7 w-unit-7 h-unit-7"
          isIconOnly
          variant="light"
          size="sm"
        >
          <BookmarkIcon size={16} className="stroke-default-500" />
        </Button>
      </Tooltip>
      <BookmarkFolder
        id={id}
        isOpen={isOpen}
        onOpen={onOpenAdd}
        onOpenChange={onOpenChange}
        nameTransliterationId={nameTransliterationId}
        number={number}
      />
      <ModalAddBookmark
        id={id}
        isOpen={isOpenAdd}
        onOpenChange={onOpenChangeAdd}
        nameTransliterationId={nameTransliterationId}
        number={number}
      />
    </>
  );
}
