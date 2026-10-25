/**
 * Journal (読みもの) article teaser — vertical with wave-framed image (PC) or horizontal list row (SP).
 * @startingPoint section="Cards" subtitle="Journal article teaser" viewport="700x340"
 */
export interface ArticleCardProps {
  image: string;
  category?: string;
  /** Placeholder date string, e.g. "2024.06.12". */
  date?: string;
  title: string;
  excerpt?: string;
  layout?: 'vertical' | 'horizontal';
  onClick?: () => void;
}
export declare function ArticleCard(props: ArticleCardProps): JSX.Element;
