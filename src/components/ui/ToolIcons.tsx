import Image from 'next/image';

// using sizes roughly mapping to the 3xl text size in the parent component
// width/height of 48 is a good baseline for text-3xl (which is 30px, line height 36px)

export const ToolIcons = {
    Windsurf: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/windsurf-white.png" alt="Windsurf" fill className="object-contain" sizes="30px" />
        </div>
    ),
    Antigravity: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/antigravity.png" alt="Antigravity" fill className="object-contain" sizes="30px" />
        </div>
    ),
    Cursor: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/cursor.png" alt="Cursor" fill className="object-contain" sizes="30px" />
        </div>
    ),
    VSCode: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/vscode.webp" alt="VS Code" fill className="object-contain" sizes="30px" />
        </div>
    ),
    Git: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/git.webp" alt="Git" fill className="object-contain" sizes="30px" />
        </div>
    ),
    Figma: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/figma.png" alt="Figma" fill className="object-contain" sizes="30px" />
        </div>
    ),
    Photoshop: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/photoshop.png" alt="Photoshop" fill className="object-contain" sizes="30px" />
        </div>
    ),
    Illustrator: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/illustrator.webp" alt="Illustrator" fill className="object-contain" sizes="30px" />
        </div>
    ),
    Premiere: () => (
        <div className="relative w-[1em] h-[1em]">
            <Image src="/tools_logo/premiere-pro.webp" alt="Premiere Pro" fill className="object-contain" sizes="30px" />
        </div>
    ),
};
