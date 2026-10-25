/**
 * Pill CTA. primary = coral fill (one per view), outline = coral hairline on white, text = underlined coral link, underline = teal "もっと見る" link.
 * @startingPoint section="Core" subtitle="Coral pill CTA with arrow" viewport="700x260"
 */
export interface ButtonProps {
  variant?: 'primary' | 'outline' | 'text' | 'underline';
  size?: 'md' | 'lg';
  /** Trailing icon name, or null for none. Default arrow-right. */
  icon?: 'arrow-right' | 'chevron-right' | null;
  children?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
