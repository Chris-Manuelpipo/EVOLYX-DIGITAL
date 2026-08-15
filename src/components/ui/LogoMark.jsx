import evolyxIcon from '../../assets/images/evolyx-icon.png';

export default function LogoMark({ size = 30 }) {
  return (
    <img
      src={evolyxIcon}
      alt="EVOLYX"
      width={size}
      height={size}
      style={{ height: size, width: 'auto' }}
    />
  );
}
