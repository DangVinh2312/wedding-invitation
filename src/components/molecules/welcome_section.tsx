import { Box, Button, Stack, Text, Title } from '@mantine/core';
import BaseSection from '../atoms/base_section';

function WelcomeSection() {
  return (
    <BaseSection bg='red.9'>
      <Stack justify='center' align='center' flex={1} gap='xl' c='white'>
        <Stack justify='center' align='center'>
          <Title order={2} size='2rem' ff='monospace' fw='lighter'>
            SAVE THE DATE
          </Title>
          <Text size='2rem'>09.03.2025</Text>
        </Stack>
        <Stack
          style={{
            fontFamily: 'MeaCulpa-Regular',
          }}
          justify='center'
          align='center'
        >
          <Text size='6rem'>Nguyễn Bật Xuân Trường</Text>
          <Text size='4rem'>&</Text>
          <Text size='6rem'>Nguyễn Hà My</Text>
        </Stack>
        <Box>
          <Button size='xl' variant='outline' color='white'>
            Xem thiệp mời
          </Button>
        </Box>
      </Stack>
    </BaseSection>
  );
}

export default WelcomeSection;
