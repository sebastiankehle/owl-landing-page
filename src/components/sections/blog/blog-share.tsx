"use client";

import { motion } from "framer-motion";
import { Share2, Link2, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface BlogShareProps {
  title: string;
  url: string;
}

export function BlogShare({ title, url }: BlogShareProps) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch (error) {
      console.error("Error copying link:", error);
    }
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`${title}\n\n`);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  const shareToLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Share2 className="h-4 w-4" />
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="text-lg font-semibold">
          Share this article
        </DialogTitle>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleCopyLink}
          >
            <Link2 className="h-4 w-4" />
            Copy link
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={shareToTwitter}
          >
            <Twitter className="h-4 w-4 text-[#1DA1F2]" />
            Twitter
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={shareToLinkedIn}
          >
            <Linkedin className="h-4 w-4 text-[#0A66C2]" />
            LinkedIn
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
