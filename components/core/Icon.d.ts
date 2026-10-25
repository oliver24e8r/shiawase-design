/** Lucide-derived line icon (1.6 stroke). Names: arrow-right, chevron-right, chevron-down, plus, minus, menu, x. */
export interface IconProps {
  name?: 'arrow-right' | 'chevron-right' | 'chevron-down' | 'plus' | 'minus' | 'menu' | 'x';
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
