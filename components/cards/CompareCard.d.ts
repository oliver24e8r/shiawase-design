/** Comparison entry (婚活アプリを比較する / 結婚相談所を比較する). feature = half of the PC white panel; row = SP list row. */
export interface CompareCardProps {
  image: string;
  title: string;
  body: string;
  layout?: 'feature' | 'row';
  onClick?: () => void;
}
export declare function CompareCard(props: CompareCardProps): JSX.Element;
