import { Card, Group, Image, Stack, Text, Title } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import bride from '../../assets/images/bride.jpeg';
import gloom from '../../assets/images/gloom.jpeg';
import BaseSection from '../atoms/base_section';

function BrideGloomSection() {
  return (
    <>
      <BaseSection {...{ visibleFrom: 'sm' }}>
        <Stack flex={1} bg='blushPink.1' justify='flex-start' align='center' gap='xl'>
          <Title order={2} size='4rem' ff='MeaCulpa-Regular' p='xl'>
            Cô dâu và Chú rể
          </Title>
          <Group gap='xl'>
            <Stack justify='center' align='center' gap='sm'>
              <Card shadow='sm' padding='lg' radius='md' withBorder>
                <Card.Section p='md'>
                  <Image src={bride} height={500} alt='bride' />
                </Card.Section>
              </Card>
              <Stack gap='sm'>
                <Text ff='monospace' fw='lighter' ta='center'>
                  CÔ DÂU
                </Text>
                <Title order={3} size='2rem' ff='Ballet'>
                  My Nguyễn
                </Title>
              </Stack>
            </Stack>
            <IconHeart
              style={{
                marginBottom: '5rem',
              }}
              size='5rem'
              color='white'
              stroke={1}
            />
            <Stack justify='center' align='center' gap='sm'>
              <Card shadow='sm' padding='lg' radius='md' withBorder>
                <Card.Section p='md'>
                  <Image src={gloom} height={500} alt='gloom' />
                </Card.Section>
              </Card>
              <Stack gap='sm'>
                <Text ff='monospace' fw='lighter' ta='center'>
                  CHÚ RỂ
                </Text>
                <Title order={3} size='2rem' ff='Ballet'>
                  Trường Nguyễn
                </Title>
              </Stack>
            </Stack>
          </Group>
        </Stack>
      </BaseSection>
      <BaseSection {...{ h: 'auto', hiddenFrom: 'sm' }}>
        <Stack flex={1} bg='blushPink.1' justify='flex-start' align='center' gap='sm' pb='xl'>
          <Title order={2} size='3rem' ff='MeaCulpa-Regular' p='xl'>
            Cô dâu và Chú rể
          </Title>
          <Stack gap='xl' justify='center' align='center'>
            <Stack justify='center' align='center' gap='sm'>
              <Card shadow='sm' padding='lg' radius='md' withBorder>
                <Card.Section p='md'>
                  <Image src={bride} height={300} alt='bride' />
                </Card.Section>
              </Card>
              <Stack gap='sm'>
                <Text ff='monospace' fw='lighter' ta='center'>
                  CÔ DÂU
                </Text>
                <Title order={3} size='2rem' ff='Ballet'>
                  My Nguyễn
                </Title>
              </Stack>
            </Stack>
            <IconHeart size='5rem' color='white' stroke={1} />
            <Stack justify='center' align='center' gap='sm'>
              <Card shadow='sm' padding='lg' radius='md' withBorder>
                <Card.Section p='md'>
                  <Image src={gloom} height={300} alt='gloom' />
                </Card.Section>
              </Card>
              <Stack gap='sm'>
                <Text ff='monospace' fw='lighter' ta='center'>
                  CHÚ RỂ
                </Text>
                <Title order={3} size='2rem' ff='Ballet'>
                  Trường Nguyễn
                </Title>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </BaseSection>
    </>
  );
}

export default BrideGloomSection;
