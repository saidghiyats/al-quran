import { useRadio, cn } from "@nextui-org/react";
import { VisuallyHidden } from "@react-aria/visually-hidden";

export const FolderItem = (props: any) => {
  const {
    Component,
    children,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-start tap-highlight-transparent text-sm",
        "cursor-pointer border-2 border-default rounded-lg gap-4 p-1",
        "data-[selected=true]:border-success"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};
