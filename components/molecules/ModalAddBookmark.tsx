"use client";
import { BookmarkContext } from "@/context/BookmarkContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
} from "@nextui-org/react";
import { useContext, useMemo, useState } from "react";

interface ModalAddBookmarkProps {
  isOpen: boolean;
  onOpenChange: () => void;
  id: number;
  nameTransliterationId: string;
  number: number;
}

export default function ModalAddBookmark({
  isOpen,
  onOpenChange,
  id,
  nameTransliterationId,
  number,
}: ModalAddBookmarkProps) {
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const { addToBookmark } = useContext(BookmarkContext);

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
                Tambah ke bookmark
              </ModalHeader>
              <ModalBody>
                <span className="text-center font-medium">
                  Surah {nameTransliterationId} ayat {number}
                </span>
                <div className="flex justify-center gap-4">
                  <Checkbox
                    size="sm"
                    isSelected={isSelected}
                    onClick={() => setIsSelected((isSelected) => !isSelected)}
                  >
                    Single
                  </Checkbox>
                  <Checkbox
                    size="sm"
                    isSelected={!isSelected}
                    onClick={() => setIsSelected((isSelected) => !isSelected)}
                  >
                    Multiple
                  </Checkbox>
                </div>

                <Input
                  size="sm"
                  autoFocus
                  label="Nama"
                  placeholder="Masukkan nama bookmark"
                  variant="bordered"
                  color={validationState === "invalid" ? "danger" : "success"}
                  validationState={validationState}
                  errorMessage={
                    validationState === "invalid" && "Masukkan nama"
                  }
                  value={value}
                  onValueChange={setValue}
                />
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
                      isSelected ? "single" : "multiple",
                      id,
                      nameTransliterationId,
                      number
                    );
                    setValue("");
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
