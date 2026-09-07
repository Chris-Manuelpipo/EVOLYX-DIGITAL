import useReveal from '../../hooks/useReveal';

/**
 * Enveloppe une zone à animer. Les enfants portent .r-rise / .r-line / .r-rule /
 * .r-veil / .r-fade et se déclenchent ensemble quand la zone entre à l'écran.
 *
 * `delay` décale l'ensemble ; chaque enfant peut affiner avec style={{ '--d': ... }}.
 */
export default function Reveal({
  as: Tag = 'div',
  immediate = false,
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useReveal({ immediate });

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { ...style, '--d': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
