import { useContext, useMemo, useState } from "react";
import { BookmarkContext } from "@/context/BookmarkContext";
import { FolderItem } from "../atoms/FolderItem";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Tab,
  Tabs,
  ScrollShadow as ScrollShadow,
  RadioGroup,
} from "@nextui-org/react";

interface ModalAddBookmarkProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  id: number;
  nameTransliterationId: string;
  number: number;
}

export default function BookmarkFolder({
  isOpen,
  onOpen,
  onOpenChange,
  id,
  nameTransliterationId,
  number,
}: ModalAddBookmarkProps) {
  const { bookmark, addToBookmark } = useContext(BookmarkContext);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");

  const validationState = useMemo(() => {
    if (value === "") return "invalid";
    else return "valid";
  }, [value]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tambah ke folder
              </ModalHeader>
              <ModalBody>
                <span className="text-center font-medium">
                  Surah {nameTransliterationId} ayat {number}
                </span>
                <Tabs
                  size="sm"
                  color="success"
                  classNames={{ base: "justify-center" }}
                >
                  <Tab key="single" title="Single">
                    <ScrollShadow size={10} className="h-[130px]">
                      <RadioGroup className="flex flex-col gap-1">
                        {bookmark
                          ?.filter((v: any) => v.type === "single")
                          .map((bookmarkGroup: any, i: number) =>
                            bookmarkGroup.data.map(
                              (bookmark: any, j: number) => (
                                <FolderItem
                                  key={i * 1000 + j}
                                  onClick={() => {
                                    setValue(bookmark.name);
                                    setSelected(bookmarkGroup.type);
                                  }}
                                  value={bookmark.name}
                                >
                                  {bookmark.name}
                                </FolderItem>
                              )
                            )
                          )}
                      </RadioGroup>
                    </ScrollShadow>
                  </Tab>
                  <Tab key="multiple" title="Multiple">
                    <ScrollShadow size={10} className="h-[130px]">
                      <RadioGroup className="flex flex-col gap-1">
                        {bookmark
                          ?.filter((v: any) => v.type === "multiple")
                          .map((bookmarkGroup: any, i: number) =>
                            bookmarkGroup.data.map(
                              (bookmark: any, j: number) => (
                                <FolderItem
                                  key={i * 1000 + j}
                                  onClick={() => {
                                    setValue(bookmark.name);
                                    setSelected(bookmarkGroup.type);
                                  }}
                                  value={bookmark.name}
                                >
                                  {bookmark.name}
                                </FolderItem>
                              )
                            )
                          )}
                      </RadioGroup>
                    </ScrollShadow>
                  </Tab>
                </Tabs>
                <Button
                  color="primary"
                  variant="ghost"
                  onPress={() => {
                    onOpen();
                    onClose();
                  }}
                >
                  Buat baru...
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  isDisabled={validationState === "invalid"}
                  color="primary"
                  onPress={() => {
                    addToBookmark(
                      value,
                      selected,
                      id,
                      nameTransliterationId,
                      number
                    );
                    onClose();
                  }}
                >
                  Tambah
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
