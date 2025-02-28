import { MantineColor, MantineStyleProps, Stack } from '@mantine/core';

function BaseSection({
  bg,
  children,
  ...props
}: Readonly<{ bg?: MantineColor; children: React.ReactNode; props?: MantineStyleProps }>) {
  return (
    <Stack bg={bg} w='100%' h='100vh' {...props}>
      {children}
    </Stack>
  );
}

export default BaseSection;
