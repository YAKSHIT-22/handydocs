import { Extension } from '@tiptap/react';
import "@tiptap/extension-text-style";

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        fontSize: {
            setFontSize: (size: string) => ReturnType;
            unsetFontSize: () => ReturnType;
        };
    }
}

export const FontSizeExtension = Extension.create({
    name: "fontSize",
    addOptions(){
        return {
            types: ["textStyle"],
        }
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize : {
                        default: "",
                        parseHTML: element => element.style.fontSize,
                        renderHTML: attribute => {
                            if(!attribute.fontSize){
                                return {};
                            }
                            return {
                                style: `font-size: ${attribute.fontSize}`
                            }
                        },
                    }
                }
            }
        ]
    },
    addCommands() {
        return {
            setFontSize: (fontSize: string) => ({chain}) => {
                return chain().setMark("textStyle", {fontSize}).run()
            },
            unsetFontSize: () => ({chain}) => {
                return chain().setMark("textStyle", {fontSize: null}).removeEmptyTextStyle().run()
            }
        }
    },
})