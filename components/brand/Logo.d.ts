/** Brand lockup: interlocking pink/mint rings (cropped from mockup) + wordmark set in Zen Maru Gothic. */
export interface LogoProps {
  /** stacked = rings above wordmark (PC header); inline = rings left (footer). */
  layout?: 'stacked' | 'inline';
  /** Wordmark font size in px. */
  size?: number;
  /** Path to rings image relative to the page. */
  src?: string;
  showMark?: boolean;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
