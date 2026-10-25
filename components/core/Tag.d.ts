/** Small category label for articles ("心のこと", "婚活アプリ"). */
export interface TagProps {
  children?: React.ReactNode;
  tone?: 'plain' | 'peach' | 'mint';
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
