import { Box, Button, Stack, Text, Title } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';
import BaseSection from '../atoms/base_section';

function WelcomeSection() {
  const spy = useScrollSpy({
    selector: '#invitation h2',
  });

  return (
    <BaseSection bg='red.9'>
      <Stack visibleFrom='sm' justify='center' align='center' flex={1} gap='xl' c='white'>
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
          <Text size='5rem'>Nguyễn Bật Xuân Trường</Text>
          <Text size='4rem'>&</Text>
          <Text size='5rem'>Nguyễn Hà My</Text>
        </Stack>
        <Box>
          <Button
            size='xl'
            variant='outline'
            color='white'
            onClick={() => {
              if (spy.data && spy.data.length > 0) {
                spy.data[0].getNode().scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}
          >
            Xem thiệp mời
          </Button>
        </Box>
      </Stack>
      <Stack hiddenFrom='sm' justify='center' align='center' flex={1} gap='xl' c='white'>
        <Stack justify='center' align='center'>
          <Title order={2} size='1rem' ff='monospace' fw='lighter'>
            SAVE THE DATE
          </Title>
          <Text size='1rem'>09.03.2025</Text>
        </Stack>
        <Stack
          style={{
            fontFamily: 'MeaCulpa-Regular',
          }}
          justify='center'
          align='center'
        >
          <Text size='2rem'>Nguyễn Bật Xuân Trường</Text>
          <Text size='1rem'>&</Text>
          <Text size='2rem'>Nguyễn Hà My</Text>
        </Stack>
        <Box>
          <Button
            size='md'
            variant='outline'
            color='white'
            onClick={() => {
              if (spy.data && spy.data.length > 1) {
                spy.data[1].getNode().scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}
          >
            Xem thiệp mời
          </Button>
        </Box>
      </Stack>
    </BaseSection>
  );
}

export default WelcomeSection;
