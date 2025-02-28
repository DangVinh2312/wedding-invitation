import { Image, SimpleGrid, Stack, Title } from '@mantine/core';
import BaseSection from '../atoms/base_section';

const images = import.meta.glob('/images/wedding_album/*.{png,jpg,jpeg,svg,gif}');

function GallerySection() {
  return (
    <BaseSection {...{ h: 'auto' }}>
      <Stack visibleFrom='sm' flex={1} bg='gray.2' justify='flex-start' align='center' gap='xl' pb='md'>
        <Title order={2} size='4rem' ff='MeaCulpa-Regular' p='xl'>
          Album ảnh cưới
        </Title>
        <SimpleGrid cols={2}>
          {Object.entries(images).map(([name]) => (
            <Image key={name} src={new URL(name, import.meta.url).href} h={500} alt={name} />
          ))}
        </SimpleGrid>
      </Stack>
      <Stack hiddenFrom='sm' flex={1} bg='gray.2' justify='flex-start' align='center' gap='sm' pb='xl'>
        <Title order={2} size='3rem' ff='MeaCulpa-Regular' p='xl'>
          Album ảnh cưới
        </Title>
        <Stack align='center'>
          {Object.entries(images).map(([name]) => (
            <Image key={name} src={new URL(name, import.meta.url).href} w='80%' h={500} alt={name} />
          ))}
        </Stack>
      </Stack>
    </BaseSection>
  );
}

export default GallerySection;
