/**
 * Signature wavy-edged frame with a white outline — the hero panel and every illustration thumbnail sit inside one.
 * Give it an explicit height (or aspect-ratio) via style; children fill the inner area.
 * @startingPoint section="Core" subtitle="Wavy mint frame with white outline" viewport="700x320"
 */
export interface WaveFrameProps {
  /** Inner fill. Default var(--surface-hero) mint. */
  background?: string;
  /** White outline thickness in px. Default 6. */
  outline?: number;
  outlineColor?: string;
  /** Wave height in px. Default 5. */
  amplitude?: number;
  /** Approx. wave length in px. Default 90. */
  wavelength?: number;
  radius?: number;
  shadow?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
}
export declare function WaveFrame(props: WaveFrameProps): JSX.Element;
