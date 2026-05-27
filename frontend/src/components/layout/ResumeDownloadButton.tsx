import { Download } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

type ResumeDownloadButtonProps = Omit<ButtonProps, "children">;

export function ResumeDownloadButton(props: ResumeDownloadButtonProps) {
  return (
    <Button asChild {...props}>
      <a href="/resume/Ken_Isaac_Resume.pdf" download>
        <Download className="h-4 w-4" aria-hidden="true" />
        Download Resume
      </a>
    </Button>
  );
}
