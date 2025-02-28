function HeartsIcon({
  color = '#ffffff',
  size = 24,
}: Readonly<{
  color?: string;
  size?: number;
}>) {
  return (
    <svg
      id='Hearts--Streamline-Atlas'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-0.5 -0.5 16 16'
      height={size}
      width={size}
    >
      <desc>{'Hearts Streamline Icon: https://streamlinehq.com'}</desc>
      <defs />
      <path
        d='M11.4375 6.58125a4.69375 4.69375 0 0 0 0.2375 -1.51875 2.925 2.925 0 0 0 -5.36875 -1.61875A2.925 2.925 0 0 0 0.9375 5.0625c0 4.375 5.36875 5.856249999999999 5.36875 5.856249999999999s0.25 -0.06875 0.625 -0.21875'
        fill='none'
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={1}
      />
      <path
        d='M11.950000000000001 6.5249999999999995A2.10625 2.10625 0 0 0 10.1875 7.5a2.11875 2.11875 0 0 0 -3.88125 1.1687500000000002c0 3.175 3.88125 4.231249999999999 3.88125 4.231249999999999s3.875 -1.05625 3.875 -4.231249999999999a2.1125 2.1125 0 0 0 -2.1125 -2.1437500000000003Z'
        fill='none'
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={1}
      />
    </svg>
  );
}

export default HeartsIcon;
