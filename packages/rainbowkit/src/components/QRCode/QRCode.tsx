import { Cuer } from 'cuer';
import React from 'react';
import { AsyncImage } from '../AsyncImage/AsyncImage';
import { Box, type BoxProps } from '../Box/Box';
import { QRCodeBackgroundClassName } from '../ConnectOptions/DesktopOptions.css';

type Props = {
  ecl?: 'L' | 'M' | 'Q' | 'H';
  logoBackground?: string;
  logoUrl?: string | (() => Promise<string>);
  logoMargin?: number;
  logoSize?: number;
  size?: number;
  uri: string;
};

export function QRCode({
  ecl = 'M',
  logoBackground,
  logoSize = 50,
  logoUrl,
  size: sizeProp = 200,
  uri,
}: Props) {
  const padding: NonNullable<BoxProps['padding']> = '20';
  const size = sizeProp - Number.parseInt(padding, 10) * 2;

  const showLogo = logoSize > 0;

  const errorCorrectionMap = {
    L: 'low',
    M: 'medium',
    Q: 'quartile',
    H: 'high',
  } as const;

  return (
    <Box
      borderColor="generalBorder"
      borderRadius="menuButton"
      borderStyle="solid"
      borderWidth="1"
      className={QRCodeBackgroundClassName}
      padding={padding}
      width="max"
    >
      <Box
        style={{
          height: size,
          userSelect: 'none',
          width: size,
        }}
        userSelect="none"
      >
        <Cuer.Root value={uri} errorCorrection={errorCorrectionMap[ecl]}>
          <Cuer.Cells />
          <Cuer.Finder />
          {showLogo && logoUrl && (
            <Cuer.Arena>
              <Box
                style={{
                  background: logoBackground,
                  borderRadius: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <AsyncImage
                  height={logoSize}
                  width={logoSize}
                  src={logoUrl}
                  background={logoBackground}
                  borderColor={{ custom: 'rgba(0, 0, 0, 0.06)' }}
                  borderRadius="13"
                />
              </Box>
            </Cuer.Arena>
          )}
        </Cuer.Root>
      </Box>
    </Box>
  );
}
