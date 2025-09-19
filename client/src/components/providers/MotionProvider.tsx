import { type PropsWithChildren } from "react";
import { MotionConfig, type Transition } from "framer-motion";

type MotionProviderProps = PropsWithChildren<{
  transition?: Transition;
}>;

export function MotionProvider({ children, transition }: MotionProviderProps) {
  // Central place to tweak defaults for future animations.
  return (
    <MotionConfig
      reducedMotion="user"
      transition={transition ?? { duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </MotionConfig>
  );
}
