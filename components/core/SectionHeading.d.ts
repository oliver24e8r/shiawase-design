/** Section header: spaced Latin eyebrow + rounded JP title + coral dash (PC) or hairlines (SP). */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: 'center' | 'left';
  /** dash = coral 22px bar under title (PC); lines = hairlines beside eyebrow (SP); none. */
  rule?: 'dash' | 'lines' | 'none';
  /** sm = 18px for SP columns. */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
