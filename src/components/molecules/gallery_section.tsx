import { Image, SimpleGrid, Stack, Title } from '@mantine/core';
import BaseSection from '../atoms/base_section';

const images = import.meta.glob('../../assets/images/wedding_album/*.{png,jpg,jpeg,svg,gif}');

function GallerySection() {
  return (
    <BaseSection {...{ h: 'auto' }}>
      <Stack flex={1} bg='gray.2' justify='flex-start' align='center' gap='xl' pb='md'>
        <Title order={2} size='4rem' ff='MeaCulpa-Regular' p='xl'>
          Album ảnh cưới
        </Title>
        <SimpleGrid cols={2}>
          {Object.entries(images).map(([name]) => (
            <Image key={name} src={new URL(name, import.meta.url).href} h={500} alt={name} />
          ))}
        </SimpleGrid>
      </Stack>
    </BaseSection>
  );
}

export default GallerySection;
