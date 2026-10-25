/**
 * "Choose your way" entry: wave-framed 3D illustration + title + short copy + outline CTA (vertical, PC) or chevron row (horizontal, SP).
 * @startingPoint section="Cards" subtitle="気持ちから選ぶ entry card" viewport="700x360"
 */
export interface ChoiceCardProps {
  image: string;
  title: string;
  /** Use \n for intended line breaks on PC. */
  body: string;
  /** CTA label (vertical layout only). */
  cta?: string;
  layout?: 'vertical' | 'horizontal';
  onClick?: () => void;
}
export declare function ChoiceCard(props: ChoiceCardProps): JSX.Element;
