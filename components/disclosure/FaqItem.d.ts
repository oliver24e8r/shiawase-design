/** FAQ accordion row. marker "q" = "Q." prefix + plus/minus (PC); "chevron" = chevron-down (SP). */
export interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
  marker?: 'q' | 'chevron';
  compact?: boolean;
}
export declare function FaqItem(props: FaqItemProps): JSX.Element;
