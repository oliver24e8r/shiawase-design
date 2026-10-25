/** Round icon button: coral filled arrow (card corners, header) or ghost (hamburger menu). */
export interface IconButtonProps {
  icon?: 'arrow-right' | 'chevron-right' | 'menu' | 'x' | 'plus';
  variant?: 'coral' | 'ghost';
  /** Diameter in px. Default 30. */
  size?: number;
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
